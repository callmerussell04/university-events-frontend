import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useLocations from '../../locations/hooks/LocationsHook.js';
import { useState } from 'react';

const EventsForm = ({ event, handleChange }) => {
    const { locations } = useLocations();
    const statuses = ["Запланировано", "В процессе", "Завершено", "Отменено"];

    const [isEndDateInvalid, setIsEndDateInvalid] = useState(false);

    const validateDates = (start, end) => {
        if (start && end) {
            const isInvalid = new Date(end) < new Date(start);
            setIsEndDateInvalid(isInvalid);
        } else {
            setIsEndDateInvalid(false);
        }
    };

    return (
        <>
            <Input name='name' label='Название' value={event.name} onChange={handleChange}
                type='text' required />
            <Select values={statuses} name='status' label='Статус' value={event.status} onChange={handleChange}
                required />
            <Input name='startDateTime' label='Начало' value={event.startDateTime} onChange={handleChange}
                type='datetime-local' required />
            <Input name='endDateTime' label='Окончание' value={event.endDateTime} onChange={(e) => {
                validateDates(event.startDateTime, e.target.value);
                handleChange(e);
            }}
                type='datetime-local' isInvalid={isEndDateInvalid} required />
            <Input name='organizer' label='Организатор' value={event.organizer} onChange={handleChange}
                type='text' required />
            <Select values={locations} name='locationId' label='Помещение' value={event.locationId} onChange={handleChange}
                required />
        </>
    );
};

EventsForm.propTypes = {
    event: PropTypes.object,
    handleChange: PropTypes.func,
};

export default EventsForm;
