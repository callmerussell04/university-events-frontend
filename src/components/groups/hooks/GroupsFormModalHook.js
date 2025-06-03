import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useGroupsForm from './GroupsFormHook';



const useGroupsFormModal = (groupsChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        group,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useGroupsForm(currentId, groupsChangeHandle);

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
        currentGroup: group,
        handleGroupChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useGroupsFormModal;
