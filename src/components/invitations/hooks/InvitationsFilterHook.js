import { useSearchParams } from 'react-router-dom';
import useEvents from '../../events/hooks/EventsHook';

const useEventFilter = () => {
    const filterName = 'eventId';

    const [searchParams, setSearchParams] = useSearchParams();

    const { events } = useEvents({});

    const handleEventFilterChange = (e) => {
        const event = e.target.value;
        if (event) {
            searchParams.set(filterName, e.target.value);
        } else {
            searchParams.delete(filterName);
        }
        setSearchParams(searchParams);
    };

    return {
        events,
        currentEventFilter: searchParams.get(filterName) || '',
        handleEventFilterChange,
    };
};
export default useEventFilter;
