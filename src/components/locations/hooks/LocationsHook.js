import { useEffect, useState } from 'react';
import LocationsApiService from '../service/LocationsApiService';

const useLocations = () => {
    const [locations, setLocations] = useState([]);
    const [locationsRefresh, setLocationsRefresh] = useState(false);
    const handleLocationsChange = () => setLocationsRefresh(!locationsRefresh);

    const getLocations = async () => {
        const data = await LocationsApiService.getAll();
        setLocations(data ?? []);
    };

    useEffect(() => {
        getLocations();
    }, [locationsRefresh]);

    return {
        locations,
        handleLocationsChange
    };
};

export default useLocations;
