import { useEffect, useState } from 'react';
import EventsApiService from '../service/EventsApiService';

const useEvents = ({ page, nameFilter, statusFilter, locationFilter, startDateFilter, endDateFilter, expand }) => {
    const [events, setEvents] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [eventsRefresh, setEventsRefresh] = useState(false);
    const handleEventsChange = () => setEventsRefresh(!eventsRefresh);
    const clearFilters = () => {nameFilter, statusFilter, locationFilter, startDateFilter, endDateFilter = null;}

    const getEvents = async () => {
        if (expand) {
            const data = await EventsApiService.getAll(expand);
            setEvents(data ?? []);
        }
        else {
            let expand = `?`;
            if (page) expand = `page=${page}`;
            if (nameFilter) {
                expand = `${expand}&name=${nameFilter}`;
            }
            if (locationFilter) {
                expand = `${expand}&locationId=${locationFilter}`;
            }
            if (statusFilter) {
                expand = `${expand}&status=${statusFilter}`;
            }
            if (startDateFilter) {
                expand = `${expand}&startDate=${startDateFilter}`;
            }
            if (endDateFilter) {
                expand = `${expand}&endDate=${endDateFilter}`;
            }
            const data = await EventsApiService.getAll(expand);
            setEvents(data.items ?? []);
            setTotalPages(data.totalPages ?? 0);
        }
    };

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventsRefresh, page, nameFilter, locationFilter, statusFilter, startDateFilter, endDateFilter]);

    return {
        events,
        handleEventsChange,
        totalPages,
        clearFilters
    };
};

export default useEvents;
