import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class UsersApiServiceClass extends ApiService {
    constructor() {
        super('user');
    }

    getAllNoPages(expand) {
        return ApiClient.get(`${this.url}/no-pages${expand || ''}`, { headers: this.getAuthHeader() });
    }
}

const UsersApiService = new UsersApiServiceClass();

export default UsersApiService;