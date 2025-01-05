import axios from "axios";

/**
 * API Instance
 */
export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variables
  withCredentials: true, // Include credentials (cookies, etc.) in requests
  headers: {
    "Content-Type": "application/json", // Default content type
  },
  timeout: 10000, // Set request timeout (10 seconds)
});

/**
 * Request Interceptor
 * - Logs outgoing requests
 * - Adds custom headers if needed
 */
apiInstance.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method?.toUpperCase()} -> ${config.url}`);
    
    // Add any custom headers if needed (e.g., Authorization token)
    // config.headers['Authorization'] = `Bearer ${yourToken}`;
    
    return config;
  },
  (error) => {
    console.error("[Request Error]", error.message);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * - Handles successful responses
 * - Logs and manages errors
 */
apiInstance.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.status} -> ${response.config.url}`);
    return response; // Return the response data as-is
  },
  (error) => {
    console.error("[Response Error]", error.message);
    if (error.response) {
      console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
      console.error("Details:", error.response.data);
    } else if (error.request) {
      console.error("No response received from server.");
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

/**
 * Export API Utils for common HTTP methods
 */
export const apiUtils = {
  get: (url, config) => apiInstance.get(url, config),
  post: (url, data, config) => apiInstance.post(url, data, config),
  put: (url, data, config) => apiInstance.put(url, data, config),
  delete: (url, config) => apiInstance.delete(url, config),
};

/**
 * Example Usage:
 * 
 * import { apiUtils } from './api';
 * 
 * // Fetch data example
 * apiUtils.get('/example-endpoint')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 */
