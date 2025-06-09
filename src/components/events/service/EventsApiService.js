import ApiService from '../../api/ApiService';
import { ApiClient } from '../../api/ApiClient';
import axios from 'axios';

class EventsApiServiceClass extends ApiService {
    constructor() {
        super('event');
    }

    getAllNoArgs() {
        return ApiClient.get(`${this.url}/no-args`, { headers: this.getAuthHeader() });
    }
    async getStats(expand) {
        try {
            const response = await axios.get(`http://localhost:8080/api/1.0/event/statistics/export-pdf${expand || ''}`, {responseType: 'blob', headers: this.getAuthHeader() });
            const contentDisposition = response.headers['content-disposition'];
            let filename = 'event_statistics.pdf';
            if (contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                if (filenameMatch && filenameMatch[1]) {
                    filename = filenameMatch[1];
                }
            }

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            console.log('PDF файл успешно скачан.');
            return true;
        } catch (error) {
            console.error('Ошибка при скачивании PDF:', error);
            if (error.response && error.response.data) {
                // Если сервер вернул ошибку в виде JSON, можно её прочитать
                const reader = new FileReader();
                reader.onload = function() {
                    try {
                        const errorJson = JSON.parse(reader.result);
                        alert(`Не удалось скачать отчет: ${errorJson.message || 'Неизвестная ошибка'}`);
                    } catch (e) {
                        alert('Не удалось скачать отчет. Пожалуйста, попробуйте еще раз.');
                        return false;
                    }
                };
                reader.readAsText(error.response.data);
                return false;
            } else {
                alert('Не удалось скачать отчет. Пожалуйста, попробуйте еще раз.');
                return false;
            }
        }
    }
}

const EventsApiService = new EventsApiServiceClass();

export default EventsApiService;