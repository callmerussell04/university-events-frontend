import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useFacultiesForm from './FacultiesFormHook';



const useFacultiesFormModal = (facultiesChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        faculty,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useFacultiesForm(currentId, facultiesChangeHandle);

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
        currentFaculty: faculty,
        handleFacultyChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useFacultiesFormModal;
