import { useState } from 'react';
import toast from 'react-hot-toast';
import useUser from './UserByIdHook';
import UsersApiService from '../service/UsersApiService';



const useUsersForm = (id, usersChangeHandle) => {
    const { user, setUser } = useUser(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getUserObject = (formData) => {
        const name = formData.name;
        const email = formData.email;
        const username = formData.username;
        const phoneNumber = formData.phoneNumber;
        const role = formData.role;
        const groupId = parseInt(formData.groupId, 10);
        return {
            name: name,
            email: email,
            username: username,
            phoneNumber: phoneNumber,
            role: role,
            groupId: groupId,
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setUser({
            ...user,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getUserObject(user);
        if (form.checkValidity()) {
            if (id === undefined) {
                await UsersApiService.create(body);
            } else {
                await UsersApiService.update(id, body);
            }
            if (usersChangeHandle) usersChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'UsersTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        user,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useUsersForm;
