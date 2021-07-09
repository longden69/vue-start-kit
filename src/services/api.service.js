const axios = require('axios');

export default class ApiService {
  instance = null;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_API,
      headers: {
        Authorization: 'AUTH_TOKEN',
        withCredentials: false, // default
      },
    });
  }

  initRequest() {
    this.instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );
  }

  setResponse() {
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );
  }
}
