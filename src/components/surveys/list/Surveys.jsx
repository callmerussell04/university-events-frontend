import { Button } from 'react-bootstrap';
import ModalForm from '../../modal/ModalForm.jsx';
import useTakeSurveyFormModal from '../hooks/TakeSurveyFormModalHook.js';
import useSurveys from '../hooks/SurveysHook.js';
import TakeSurveyForm from '../form/TakeSurveyForm.jsx';
import PropTypes from 'prop-types';
import SurveysRow from './SurveysRow.jsx'
import { useState } from 'react';


const Surveys = () => {

    const { surveys, handleSurveysChange } = useSurveys();

    const [answers, setAnswers] = useState([]);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentSurvey,
        handleFormSubmit,
        handleFormClose,
    } = useTakeSurveyFormModal(handleSurveysChange, answers, 5, setAnswers); //TODO: заменить userId

    const handleAnswerChange = ({ questionId, text = null, optionId = null }) => {
        setAnswers((prevAnswers) => {
            const existing = prevAnswers.find(a => a.questionId === questionId);
            if (existing) {
                return prevAnswers.map(a =>
                    a.questionId === questionId
                        ? { ...a, text, optionId }
                        : a
                );
            } else {
                return [...prevAnswers, { questionId, text, optionId }];
            }
        });
    };

    return (
        <>
            <div className='d-flex flex-column justify-content-start'>
                {
                    surveys.map((survey) =>
                        <SurveysRow key={survey.id} survey={survey}
                            onClick={() => showFormModal(survey.id)}
                        />)
                }
            </div>
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title={currentSurvey.name}>
                <TakeSurveyForm survey={currentSurvey} answers={answers} onAnswerChange={handleAnswerChange} />
            </ModalForm>
        </>
    );
};

Surveys.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Surveys;
