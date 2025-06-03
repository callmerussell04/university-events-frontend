import { useEffect, useState } from 'react';
import EventsApiService from '../service/EventsApiService';

const useEvent = (id) => {
    const emptyEvent = {
        id: '',
        name: '',
        status: '',
        startDateTime: '',
        endDateTime: '',
        organizer: '',
        locationId: ''
    };
    
    const [event, setEvent] = useState({ ...emptyEvent });

    const getEventById = async (eventId = undefined) => {
        if (eventId && eventId > 0) {
            const data = await EventsApiService.get(eventId);
            setEvent(data);
        } else {
            setEvent({ ...emptyEvent });
        }
    };

    useEffect(() => {
        getEventById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        event,
        setEvent
    };
};

export default useEvent;
