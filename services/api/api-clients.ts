/** @format */

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import ApiRoutes from "./api-routes";
import { MakeRequestFunction } from "@/types";

export const BaseURL = ApiRoutes.BASE_URL_DEV;

// Axios instance
export const API: AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

let authToken: string | null = null;

// Function to set the token globally for the API instance
export const setAuthToken = (token: string | null) => {
  authToken = token;
};

// Request Interceptor: Attach token to every request
API.interceptors.request.use(
  async (config) => {
    // Check if authToken is already set in memory
    if (!authToken) {
      // If not, try to load it from localStorage
      const storedToken = localStorage.getItem("userToken");
      if (storedToken) {
        authToken = storedToken; // Update in-memory token
      }
    }

    // Attach the token if available and if it's not a login request
    if (authToken && !config.url?.endsWith(ApiRoutes.Login)) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.warn(
        "Unauthorized access. Clearing token and redirecting to login."
      );
      // Ensure localStorage access is client-side
      if (typeof window !== "undefined") {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userInfo");
      }
      setAuthToken(null);
      setAuthToken(null);
    }
    return Promise.reject(error);
  }
);

// Helper function to build headers (still useful for specific overrides)
function buildHeaders(
  payloadData?: any,
  tokenOrHeaders?: string | Record<string, string>
): Record<string, string> {
  const customHeaders: Record<string, string> = {};

  if (typeof tokenOrHeaders === "string") {
    customHeaders["Authorization"] = `Bearer ${tokenOrHeaders}`;
  } else if (typeof tokenOrHeaders === "object") {
    Object.assign(customHeaders, tokenOrHeaders);
  }

  const isFormData = payloadData instanceof FormData;
  if (isFormData) {
    if (customHeaders["Content-Type"]) {
      delete customHeaders["Content-Type"];
    }
  }
  return customHeaders;
}

// GET Request
export function getRequest<R = any>(): MakeRequestFunction<never, R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(undefined, options?.tokenOrHeaders),
      };
      const response = await API.get<R>(url, config);
      return response;
    } catch (error: any) {
      console.error("GET Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// POST Request
export function postRequest<D = any, R = any>(): MakeRequestFunction<D, R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      const response = await API.post<R>(url, options?.data, config);
      return response;
    } catch (error: any) {
      console.error("POST Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// PATCH Request
export function patchRequest<D = any, R = any>(): MakeRequestFunction<D, R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      const response = await API.patch<R>(url, options?.data, config);
      return response;
    } catch (error: any) {
      console.error("PATCH Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// PUT Request
export function putRequest<D = any, R = any>(): MakeRequestFunction<D, R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      const response = await API.put<R>(url, options?.data, config);
      return response;
    } catch (error: any) {
      console.error("PUT Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// DELETE Request
export function deleteRequest<R = any>(): MakeRequestFunction<never, R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(undefined, options?.tokenOrHeaders),
      };
      const response = await API.delete<R>(url, {
        ...config,
      });
      return response;
    } catch (error: any) {
      console.error("DELETE Request Error:", error);
      throw error.response?.data || error;
    }
  };
}
