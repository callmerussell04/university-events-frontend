import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class InvitationsApiServiceClass extends ApiService {
    constructor() {
        super('invitation');
    }

    inviteGroup(body) {
        return ApiClient.post(`${this.url}/invite-group`, body, { headers: this.getAuthHeader() });
    }

    inviteCourse(body) {
        return ApiClient.post(`${this.url}/invite-course`, body, { headers: this.getAuthHeader() });
    }
    getByUser(id, expand) {
        return ApiClient.get(`${this.url}/by-user/${id}${expand || ''}`, { headers: this.getAuthHeader() });
    }
}

const InvitationsApiService = new InvitationsApiServiceClass();

export default InvitationsApiService;