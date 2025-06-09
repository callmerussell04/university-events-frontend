import { useState } from 'react';
import toast from 'react-hot-toast';
import useSurvey from './SurveyByIdHook';
import SurveysApiService from '../service/SurveysApiService';
import AuthApiService from '../../auth/service/AuthApiService';



const useTakeSurveyForm = (id, surveysChangeHandle, answers, userId) => {
    const { survey } = useSurvey(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            await SurveysApiService.takeSurvey({userId: userId, answers: answers});
            if (surveysChangeHandle) surveysChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'SurveysTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        survey,
        validated,
        handleSubmit,
        resetValidity,
    };
};

export default useTakeSurveyForm;
