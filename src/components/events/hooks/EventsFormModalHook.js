import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useEventsForm from './EventsFormHook';



const useEventsFormModal = (eventsChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        event,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useEventsForm(currentId, eventsChangeHandle);

    const showModalDialog = (id) => {
        setCurrentId(id);
        resetValidity();
        showModal();
    };

    const onClose = () => {
        setCurrentId(-1);
        hideModal();
    };

    const onSubmit = async (e) => {
        if (await handleSubmit(e)) {
            onClose();
        }
    };

    return {
        isFormModalShow: isModalShow,
        isFormValidated: validated,
        showFormModal: showModalDialog,
        currentEvent: event,
        handleEventChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useEventsFormModal;
