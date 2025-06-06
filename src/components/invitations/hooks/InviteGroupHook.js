import { useState } from 'react';
import toast from 'react-hot-toast';
import InvitationsApiService from '../service/InvitationsApiService';
import useModal from '../../modal/ModalHook';



const useGroupInvitationForm = (invitationsChangeHandle) => {
    const emptyInvitation = {
        id: '',
        groupId: '',
        eventId: ''
    };
    const [invitation, setInvitation] = useState({ ...emptyInvitation });

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getInvitationObject = (formData) => {
        const groupId = parseInt(formData.groupId, 10);
        const eventId = parseInt(formData.eventId, 10);
        return {
            groupId: groupId,
            eventId: eventId
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
            await InvitationsApiService.inviteGroup(body);
            if (invitationsChangeHandle) invitationsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'InvitationsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    const { isModalShow, showModal, hideModal } = useModal();
    

    const showModalDialog = () => {
        resetValidity();
        showModal();
    };

    const onClose = () => {
        hideModal();
        setInvitation({ ...emptyInvitation })
    };

    const onSubmit = async (event) => {
        if (await handleSubmit(event)) {
            onClose();
        }
    };

    return {
        groupInvitation: invitation,
        isGroupInvitationFormModalShow: isModalShow,
        isGroupInvitationFormValidated: validated,
        showGroupInvitationFormModal: showModalDialog,
        handleGroupInvitationFormChange: handleChange,
        handleGroupInvitationFormSubmit: onSubmit,
        handleGroupInvitationFormClose: onClose,
    };
};

export default useGroupInvitationForm;
