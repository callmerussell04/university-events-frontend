import { useState } from 'react';
import toast from 'react-hot-toast';
import useLocation from './LocationByIdHook';
import LocationsApiService from '../service/LocationsApiService';



const useLocationsForm = (id, locationsChangeHandle) => {
    const { location, setLocation } = useLocation(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getLocationObject = (formData) => {
        const name = formData.name;
        return {
            name: name
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setLocation({
            ...location,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getLocationObject(location);
        if (form.checkValidity()) {
            if (id === undefined) {
                await LocationsApiService.create(body);
            } else {
                await LocationsApiService.update(id, body);
            }
            if (locationsChangeHandle) locationsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'LocationsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        location,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useLocationsForm;
