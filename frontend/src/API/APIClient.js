import axios from "axios";

/**
 * Экземпляр Axios, настроенный для отправки HTTP-запросов к серверу Express.js.
 * Используется для взаимодействия с API, обеспечивая стандартную конфигурацию
 * базового URL и тайм-аута запроса.
 * @constant {AxiosInstance} APIClient - Настроенный экземпляр Axios для API-запросов.
 * @property {string} baseURL - Базовый URL для запросов к серверу Express.js.
 * @property {number} timeout - Максимальное время ожидания ответа от сервера в миллисекундах.
 * @example
 * APIClient.post('/route', { data: 'sample data' })
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * @see {@link https://github.com/Kdzefuf} Автор документации и кода
 */
const APIClient = axios.create({
  baseURL: 'http://localhost:3500/api',
  timeout: 1000,
});

export default APIClient;
