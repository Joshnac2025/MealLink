// import axios from 'axios';
import mockApi from './mockApi';

// Backend connection (commented out for standalone mode)
// const api = axios.create({
//     baseURL: 'http://127.0.0.1:5000/api',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Request interceptor to add token if available (for future use)
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // Response interceptor for global error handling
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error('API Error:', error.response || error.message);
//         if (error.response && error.response.status === 401) {
//             // Handle unauthorized access (e.g., redirect to login)
//             // window.location.href = '/login'; // Uncomment when login route is ready
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;

// Using mockApi for standalone mode with localStorage
export default mockApi;