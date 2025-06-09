import { ApiClient } from './ApiClient';

class ApiService {
    constructor(url) {
        this.url = url;
    }

    getAuthHeader = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.token) {
            return { Authorization: "Bearer " + user.token };
        } else {
            return {};
        }
    };

    async getAll(expand) {
        return ApiClient.get(`${this.url}${expand || ''}`, { headers: this.getAuthHeader() });
    }

    async get(id, expand) {
        return ApiClient.get(`${this.url}/${id}${expand || ''}`, { headers: this.getAuthHeader() });
    }

    async create(body) {
        return ApiClient.post(this.url, body, { headers: this.getAuthHeader() });
    }

    async update(id, body) {
        return ApiClient.put(`${this.url}/${id}`, body, { headers: this.getAuthHeader() });
    }

    async delete(id) {
        return ApiClient.delete(`${this.url}/${id}`, { headers: this.getAuthHeader() });
    }
}

export default ApiService;
