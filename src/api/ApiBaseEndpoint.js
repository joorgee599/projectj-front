// src/api/ApiBaseEndpoint.js

export class ApiBaseEndpoint {
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

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Fetch GET error:", error);
      throw error;
    }
  }
}
