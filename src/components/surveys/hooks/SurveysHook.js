import { useEffect, useState } from 'react';
import SurveysApiService from '../service/SurveysApiService';

const useSurveys = () => {
    const [surveys, setSurveys] = useState([]);
    const [surveysRefresh, setSurveysRefresh] = useState(false);
    const handleSurveysChange = () => setSurveysRefresh(!surveysRefresh);

    const getSurveys = async () => {
        const data = await SurveysApiService.getAll();
        setSurveys(data ?? []);
    };

    useEffect(() => {
        getSurveys();
    }, [surveysRefresh]);

    return {
        surveys,
        handleSurveysChange
    };
};

export default useSurveys;
