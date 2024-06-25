import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: process.env.apiDomain,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window !== 'undefined') {
      // Client-side
      const session = await getSession();
      if (session && session.user && session.user.myToken) {
        config.headers.Authorization = `Bearer ${session.user.myToken}`;
      }
    } else if (config.headers.Authorization == null && config.session) {
      // Server-side
      const { user } = config.session;
      if (user && user.myToken) {
        config.headers.Authorization = `Bearer ${user.myToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(

  (response) => response,
  
  (error) => {
    if (error.response) {
      console.error('Request failed with status code:', error.response.status);
      console.error('Response:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

const AxiosProvider = ({ children }) => {
  const { locale } = useRouter();
  useEffect(() => {
    axiosInstance.defaults.headers['Accept-Language'] = locale.split('-')[1];
  }, [locale]);

  return children;
};

export { axiosInstance, AxiosProvider };
