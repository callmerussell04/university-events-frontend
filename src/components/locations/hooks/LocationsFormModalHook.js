import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useLocationsForm from './LocationsFormHook';



const useLocationsFormModal = (locationsChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    

    const {
        location,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    } = useLocationsForm(currentId, locationsChangeHandle);

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
        currentLocation: location,
        handleLocationChange: handleChange,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useLocationsFormModal;
