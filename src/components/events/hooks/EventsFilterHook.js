import { useSearchParams } from 'react-router-dom';
import useLocations from '../../locations/hooks/LocationsHook';


const useNameFilter = () => {
    const filterName = 'name';

    const [searchParams, setSearchParams] = useSearchParams();

    const handleNameFilterChange = (name) => {
        if (name) {
            searchParams.set(filterName, name);
        } else {
            searchParams.delete(filterName);
        }
        setSearchParams(searchParams);
    };

    return {
        currentNameFilter: searchParams.get(filterName) || '',
        handleNameFilterChange,
    };
};

const useStatusFilter = () => {
    const filterName = 'status';

    const [searchParams, setSearchParams] = useSearchParams();

    const handleStatusFilterChange = (event) => {
        const status = event.target.value;
        if (status) {
            searchParams.set(filterName, event.target.value);
        } else {
            searchParams.delete(filterName);
        }
        setSearchParams(searchParams);
    };

    return {
        currentStatusFilter: searchParams.get(filterName) || '',
        handleStatusFilterChange,
    };
};

const useLocationFilter = () => {
    const filterName = 'locationId';

    const [searchParams, setSearchParams] = useSearchParams();

    const { locations } = useLocations();

    const handleLocationFilterChange = (event) => {
        const location = event.target.value;
        if (location) {
            searchParams.set(filterName, event.target.value);
        } else {
            searchParams.delete(filterName);
        }
        setSearchParams(searchParams);
    };

    return {
        locations,
        currentLocationFilter: searchParams.get(filterName) || '',
        handleLocationFilterChange,
    };
};

export { useNameFilter, useStatusFilter, useLocationFilter };
