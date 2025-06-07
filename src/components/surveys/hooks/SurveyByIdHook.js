import { useEffect, useState } from 'react';
import SurveysApiService from '../service/SurveysApiService';

const useSurvey = (id) => {
    const emptySurvey = {
        id: '',
        name: '',
        questions: []
    };
    
    const [survey, setSurvey] = useState({ ...emptySurvey });

    const getSurveyById = async (surveyId = undefined) => {
        if (surveyId && surveyId > 0) {
            const data = await SurveysApiService.get(surveyId);
            setSurvey(data);
        } else {
            setSurvey({ ...emptySurvey });
        }
    };

    useEffect(() => {
        getSurveyById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        survey,
        setSurvey
    };
};

export default useSurvey;
