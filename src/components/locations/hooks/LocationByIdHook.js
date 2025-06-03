import { useEffect, useState } from 'react';
import LocationsApiService from '../service/LocationsApiService';

const useLocation = (id) => {
    const emptyLocation = {
        id: '',
        name: ''
    };
    
    const [location, setLocation] = useState({ ...emptyLocation });

    const getLocationById = async (locationId = undefined) => {
        if (locationId && locationId > 0) {
            const data = await LocationsApiService.get(locationId);
            setLocation(data);
        } else {
            setLocation({ ...emptyLocation });
        }
    };

    useEffect(() => {
        getLocationById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        location,
        setLocation
    };
};

export default useLocation;
