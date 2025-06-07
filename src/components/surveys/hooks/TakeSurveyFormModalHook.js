import { useState } from 'react';
import useModal from '../../modal/ModalHook';
import useTakeSurveyForm from './TakeSurveyFormHook';



const useTakeSurveyFormModal = (surveysChangeHandle, answers, userId, setAnswers) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);
    
    const {
        survey,
        validated,
        handleSubmit,
        resetValidity,
    } = useTakeSurveyForm(currentId, surveysChangeHandle, answers, userId);

    const showModalDialog = (id) => {
        setCurrentId(id);
        resetValidity();
        showModal();
    };

    const onClose = () => {
        setCurrentId(-1);
        hideModal();
        setAnswers([]);
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
        currentSurvey: survey,
        handleFormSubmit: onSubmit,
        handleFormClose: onClose,
    };
};

export default useTakeSurveyFormModal;
