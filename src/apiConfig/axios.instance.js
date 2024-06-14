import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: process.env.apiDomain,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Check if Authorization header is already set
    if (!config.headers.Authorization) {
      // If running on the client-side, fetch the session
      if (typeof window !== 'undefined') {
        const session = await getSession();
        if (session && session.user && session.user.myToken) {
          config.headers.Authorization = `Bearer ${session.user.myToken}`;
        }
      } else if (config.session && config.session.user && config.session.user.myToken) {
        // If running on the server-side, use the session from the config
        config.headers.Authorization = `Bearer ${config.session.user.myToken}`;
      }
    }
    
    return config;
  },
  (error) => {
    console.log(error, "Request error");
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Request failed with status code:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
