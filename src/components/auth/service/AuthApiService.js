import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';
import { jwtDecode } from "jwt-decode";

class AuthApiServiceClass extends ApiService {
    constructor() {
        super('auth');
    }

    login(body) {
        return ApiClient.post(`${this.url}/signin`, body).then((response) => {
            if (response.token) {
                localStorage.setItem("user", JSON.stringify(response));
            }
            return response;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.token) {
        try {
            const decodedToken = jwtDecode(user.token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
            console.log("JWT token expired, logging out.");
            this.logout();
            return null;
            }
        } catch (error) {
            console.error("Error decoding JWT token:", error);
            this.logout();
            return null;
        }
        }
        return user;
    }
}

const AuthApiService = new AuthApiServiceClass();

export default AuthApiService;