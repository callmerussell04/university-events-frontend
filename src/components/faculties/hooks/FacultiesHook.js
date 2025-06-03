import { useEffect, useState } from 'react';
import FacultiesApiService from '../service/FacultiesApiService';

const useFaculties = () => {
    const [faculties, setFaculties] = useState([]);
    const [facultiesRefresh, setFacultiesRefresh] = useState(false);
    const handleFacultiesChange = () => setFacultiesRefresh(!facultiesRefresh);

    const getFaculties = async () => {
        const data = await FacultiesApiService.getAll();
        setFaculties(data ?? []);
    };

    useEffect(() => {
        getFaculties();
    }, [facultiesRefresh]);

    return {
        faculties,
        handleFacultiesChange
    };
};

export default useFaculties;
