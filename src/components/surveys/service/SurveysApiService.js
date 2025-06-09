import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class SurveysApiServiceClass extends ApiService {
    constructor() {
        super('survey');
    }

    takeSurvey(body) {
        return ApiClient.post(`${this.url}/take-survey`, body, { headers: this.getAuthHeader() });
    }
}

const SurveysApiService = new SurveysApiServiceClass();

export default SurveysApiService;