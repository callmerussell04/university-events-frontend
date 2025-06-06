import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class GroupsApiServiceClass extends ApiService {
    constructor() {
        super('group');
    }

    getAllNoPages() {
        return ApiClient.get(`${this.url}/no-pages`);
    }
}

const GroupsApiService = new GroupsApiServiceClass();

export default GroupsApiService;