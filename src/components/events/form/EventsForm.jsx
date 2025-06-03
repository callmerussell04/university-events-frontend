import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useLocations from '../../locations/hooks/LocationsHook.js';

const EventsForm = ({ event, handleChange }) => {
    const { locations } = useLocations();

    return (
        <>
            <Input name='name' label='Название' value={event.name} onChange={handleChange}
                type='text' required />
            <Input name='status' label='Статус' value={event.status} onChange={handleChange}
                type='text' required />
            <Input name='startDateTime' label='Начало' value={event.startDateTime} onChange={handleChange}
                type='datetime-local' required />
            <Input name='endDateTime' label='Окончание' value={event.endDateTime} onChange={handleChange}
                type='datetime-local' required />
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
