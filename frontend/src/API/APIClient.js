import axios from "axios";

/**
 * Базовый API для отправки запросов на сервер Express.js
 * @author Kdzefuf(https://github.com/Kdzefuf)
 * @constant
 */
const APIClient = axios.create({
  baseURL: 'http://localhost:3500/api',
  timeout: 1000,
});

export default APIClient;