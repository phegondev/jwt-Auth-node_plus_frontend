import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5500'
})

async function handleLogin(username, password) {
    return await axiosInstance.post('/login', { username, password });
 }
 
 async function handleGetProducts() {
    return await axiosInstance.get('/products');
 }
 
 async function handleRegister(username, password) {
    return await axiosInstance.post('/register', { username, password });
   
 }
 
 async function handleGetProfile(headers) {
    return await axiosInstance.get('/profile', { headers });
 }
 
 export { handleLogin, handleGetProducts, handleRegister, handleGetProfile };
  
 