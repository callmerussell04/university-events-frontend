import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class InvitationsApiServiceClass extends ApiService {
    constructor() {
        super('invitation');
    }

    inviteGroup(body) {
        return ApiClient.post(`${this.url}/invite-group`, body);
    }

    inviteCourse(body) {
        return ApiClient.post(`${this.url}/invite-course`, body);
    }
}

const InvitationsApiService = new InvitationsApiServiceClass();

export default InvitationsApiService;