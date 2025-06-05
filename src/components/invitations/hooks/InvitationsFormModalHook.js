import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useInvitationsForm from './InvitationsFormHook';



const useInvitationsFormModal = (invitationsChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        invitation,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useInvitationsForm(currentId, invitationsChangeHandle);

    const showModalDialog = (id) => {
        setCurrentId(id);
        resetValidity();
        showModal();
    };

    const onClose = () => {
        setCurrentId(-1);
        hideModal();
    };

    const onSubmit = async (event) => {
        if (await handleSubmit(event)) {
            onClose();
        }
    };

    return {
        isFormModalShow: isModalShow,
        isFormValidated: validated,
        showFormModal: showModalDialog,
        currentInvitation: invitation,
        handleInvitationChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useInvitationsFormModal;
