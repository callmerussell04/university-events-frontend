import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';

class EventsApiServiceClass extends ApiService {
    constructor() {
        super('event');
    }

    getAllNoArgs() {
        return ApiClient.get(`${this.url}/no-args`);
    }
}

const EventsApiService = new EventsApiServiceClass();

export default EventsApiService;