import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class SupportTicketsApiServiceClass extends ApiService {
    constructor() {
        super('support-ticket');
    }

    getAllNoPages() {
        return ApiClient.get(`${this.url}/no-pages`, { headers: this.getAuthHeader() });
    }
}

const SupportTicketsApiService = new SupportTicketsApiServiceClass();

export default SupportTicketsApiService;