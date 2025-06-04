import { useEffect, useState } from 'react';
import EventsApiService from '../service/EventsApiService';

const useEvents = (page, nameFilter, locationFilter) => {
    const [events, setEvents] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [eventsRefresh, setEventsRefresh] = useState(false);
    const handleEventsChange = () => setEventsRefresh(!eventsRefresh);

    const getEvents = async () => {
        let expand = `?page=${page}`;
        if (nameFilter) {
            expand = `${expand}&name=${nameFilter}`;
        }
        if (locationFilter) {
            expand = `${expand}&locationId=${locationFilter}`;
        }
        const data = await EventsApiService.getAll(expand);
        setEvents(data.items ?? []);
        setTotalPages(data.totalPages ?? 0);
    };

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventsRefresh, page, locationFilter]);

    return {
        events,
        handleEventsChange,
        totalPages
    };
};

export default useEvents;
