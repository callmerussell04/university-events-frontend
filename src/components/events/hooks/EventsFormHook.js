import { useState } from 'react';
import toast from 'react-hot-toast';
import useEvent from './EventByIdHook';
import EventsApiService from '../service/EventsApiService';



const useEventsForm = (id, eventsChangeHandle) => {
    const { event, setEvent } = useEvent(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getEventObject = (formData) => {
        const name = formData.name;
        const status = formData.status;
        const startDateTime = formData.startDateTime;
        const endDateTime = formData.endDateTime;
        const organizer = formData.organizer;
        const locationId = parseInt(formData.locationId, 10);
        return {
            name: name,
            status: status,
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            organizer: organizer,
            locationId: locationId
        };
    };

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setEvent({
            ...event,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        const body = getEventObject(event);
        if (form.checkValidity()) {
            if (id === undefined) {
                await EventsApiService.create(body);
            } else {
                await EventsApiService.update(id, body);
            }
            if (eventsChangeHandle) eventsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'EventsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        event,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useEventsForm;
