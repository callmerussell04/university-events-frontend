import { useSearchParams } from 'react-router-dom';
import useLocations from '../../locations/hooks/LocationsHook';


const useNameFilter = () => {
    const filterName = 'name';

    const [searchParams, setSearchParams] = useSearchParams();

    const handleNameFilterChange = (formData) => {
        const name = formData.name;
        if (name) {
            searchParams.set(filterName, event.target.value);
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

export { useNameFilter, useLocationFilter };
