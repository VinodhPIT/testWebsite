import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.apiDomain,
  headers: {
    "Content-Type": "application/json" 
  }
});

axiosInstance.interceptors.request.use(
 
  (config) => {

   
    // Check if token is passed in the request config
    if (config.token) {
      config.headers.Authorization = `Bearer ${config.token}`;
    }
    return config;
  },
  (error) => {
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
      // The request was made and the server responded with a status code
      // console.error("Request failed with status code:", error.response.status);
      // console.error("Response data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      // console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
