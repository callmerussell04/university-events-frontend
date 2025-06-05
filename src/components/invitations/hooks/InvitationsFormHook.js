import { useState } from 'react';
import toast from 'react-hot-toast';
import useInvitation from './InvitationByIdHook';
import InvitationsApiService from '../service/InvitationsApiService';



const useInvitationsForm = (id, invitationsChangeHandle) => {
    const { invitation, setInvitation } = useInvitation(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getInvitationObject = (formData) => {
        const userId = parseInt(formData.userId, 10);
        const eventId = parseInt(formData.eventId, 10);
        const status = formData.status;
        return {
            userId: userId,
            eventId: eventId,
            status: status
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInvitation({
            ...invitation,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getInvitationObject(invitation);
        if (form.checkValidity()) {
            if (id === undefined) {
                await InvitationsApiService.create(body);
            } else {
                await InvitationsApiService.update(id, body);
            }
            if (invitationsChangeHandle) invitationsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'InvitationsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        invitation,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useInvitationsForm;
