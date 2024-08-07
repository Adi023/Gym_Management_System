import {useEffect} from 'react';
import axios from '../http-common';
import ErrorPage from './ErrorPage';

const AxiosErrorHandler = ({children}) => {
  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axios.interceptors.request.use((request) => {
      // Do something here with request if you need to
      return request;
    });

    // Response interceptor
    const responseInterceptor = axios.interceptors.response.use((response) => {
      // Handle response here

      return response;
    }, (error) => {
      // Handle errors here
      if (error.response?.status) {
        switch (error.response.status) {
          case 401:
           <ErrorPage/>
            break;
          case 403:<ErrorPage/>
            // Handle Unauthorized here
            break;
          // ... And so on
        }
      }

      return error;
    });

    return () => {
      // Remove handlers here
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
};

export default AxiosErrorHandler;