// src/api/NotAuth.js
// esto es para las peticiones que no necesiten
export class ApiBaseEndpointNotAuth {
  constructor(baseURL) {
    this.baseURL = baseURL || import.meta.env.VITE_API_BASE_URL;
  }

  async get(endpoint, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      const responses = await response.json();

      return responses;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  async post(endpoint, data = {}, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });

      const responses = await response.json();
      console.log(responses);
      return responses;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }
}
