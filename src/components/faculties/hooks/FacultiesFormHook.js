import { useState } from 'react';
import toast from 'react-hot-toast';
import useFaculty from './FacultyByIdHook';
import FacultiesApiService from '../service/FacultiesApiService';



const useFacultiesForm = (id, facultiesChangeHandle) => {
    const { faculty, setFaculty } = useFaculty(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getFacultyObject = (formData) => {
        const name = formData.name;
        return {
            name: name
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFaculty({
            ...faculty,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getFacultyObject(faculty);
        if (form.checkValidity()) {
            if (id === undefined) {
                await FacultiesApiService.create(body);
            } else {
                await FacultiesApiService.update(id, body);
            }
            if (facultiesChangeHandle) facultiesChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'FacultiesTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        faculty,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useFacultiesForm;
