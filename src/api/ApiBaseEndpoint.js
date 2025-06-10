// src/api/ApiBaseEndpoint.js

import Swal from "sweetalert2";

export class ApiBaseEndpoint {
  constructor(baseURL) {
    this.baseURL = baseURL || import.meta.env.VITE_API_BASE_URL;

    const usuario = JSON.parse(localStorage.getItem("user"));
    this.token = usuario?.token || null;
  }

  buildHeaders(extraHeaders = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...extraHeaders,
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  async get(endpoint, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.buildHeaders(),
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
        headers: this.buildHeaders(headers),
        body: JSON.stringify(data),
      });
      // return await this.handleResponse(response);
      const json = await response.json();
      return json;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  async put(endpoint, data = {}, headers = {}) {  
    const url = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: this.buildHeaders(headers),
        body: JSON.stringify(data),
      });

    //  return await this.handleResponse(response);
     const json = await response.json();
      return json;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  async handleResponse(response) {
    if (response.status === 401) {
      Swal.fire({
        icon: "warning",
        title: "Session expired",
        text: "Your session has expired. Please log in again.",
        confirmButtonColor: "#0273b0",
        confirmButtonText: "Accept",
        allowOutsideClick: false, // Permite cerrar haciendo clic fuera
        allowEscapeKey: false, // Permite cerrar con Escape
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario hizo clic en Aceptar
          localStorage.removeItem("user");
          window.location.href = "/auth/login";
        }
      });

      throw new Error("Unauthorized: Token expirado o no válido");
    }

    // Intentar parsear la respuesta JSON
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error parsing response: " + error.message);
    }
  }
}
