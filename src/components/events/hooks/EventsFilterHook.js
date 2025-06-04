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
        const status = event?.target.value;
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

const useDateFilter = () => {
    const startDateFilterName = 'startDate';
    const endDateFilterName = 'endDate';

    const [searchParams, setSearchParams] = useSearchParams();

    const handleDateFilterChange = (startDate, endDate) => {
        if (startDate && endDate) {
            searchParams.set(startDateFilterName, startDate.replace('T', ' '));
            searchParams.set(endDateFilterName, endDate.replace('T', ' '));
        } else if (startDate) {
            searchParams.set(startDateFilterName, startDate.replace('T', ' '));
            searchParams.delete(endDateFilterName);
        } else if (endDate) {
            searchParams.set(endDateFilterName, endDate.replace('T', ' '));
            searchParams.delete(startDateFilterName);
        } else {
            searchParams.delete(startDateFilterName);
            searchParams.delete(endDateFilterName);
        }
        setSearchParams(searchParams);
    };

    return {
        currentStartDateFilter: searchParams.get(startDateFilterName) || '',
        currentEndDateFilter: searchParams.get(endDateFilterName) || '',
        handleDateFilterChange,
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

const useResetSearchParams = () => {
    const [, setSearchParams] = useSearchParams();

    const resetSearchParams = () => {
        const newParams = new URLSearchParams();
        setSearchParams(newParams);
    };

    return resetSearchParams;
};

export { useNameFilter, useStatusFilter, useLocationFilter, useDateFilter, useResetSearchParams };
