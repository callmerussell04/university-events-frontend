import { useState } from 'react';
import toast from 'react-hot-toast';
import useGroup from './GroupByIdHook';
import GroupsApiService from '../service/GroupsApiService';



const useGroupsForm = (id, groupsChangeHandle) => {
    const { group, setGroup } = useGroup(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getGroupObject = (formData) => {
        const name = formData.name;
        const facultyId = parseInt(formData.facultyId, 10);
        return {
            name: name,
            facultyId: facultyId
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setGroup({
            ...group,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getGroupObject(group);
        if (form.checkValidity()) {
            if (id === undefined) {
                await GroupsApiService.create(body);
            } else {
                await GroupsApiService.update(id, body);
            }
            if (groupsChangeHandle) groupsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'GroupsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        group,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useGroupsForm;
