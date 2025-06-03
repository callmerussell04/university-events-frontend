import { useEffect, useState } from 'react';
import FacultiesApiService from '../service/FacultiesApiService';

const useFaculty = (id) => {
    const emptyFaculty = {
        id: '',
        name: ''
    };
    
    const [faculty, setFaculty] = useState({ ...emptyFaculty });

    const getFacultyById = async (facultyId = undefined) => {
        if (facultyId && facultyId > 0) {
            const data = await FacultiesApiService.get(facultyId);
            setFaculty(data);
        } else {
            setFaculty({ ...emptyFaculty });
        }
    };

    useEffect(() => {
        getFacultyById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        faculty,
        setFaculty
    };
};

export default useFaculty;
