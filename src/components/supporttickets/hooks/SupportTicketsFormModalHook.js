import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useSupportTicketsForm from './SupportTicketsFormHook';



const useSupportTicketsFormModal = (supportticketsChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        supportticket,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useSupportTicketsForm(currentId, supportticketsChangeHandle);

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
        currentSupportTicket: supportticket,
        handleSupportTicketChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useSupportTicketsFormModal;
