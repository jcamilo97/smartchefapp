import apisauce from 'apisauce';
import { API_URL } from 'smartchef/src/config/environment';

const create = (baseURL = API_URL) => {
  // timeout: 2000
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  });

  // if (process.env.NODE_ENV === 'development' && console.tron) {
  //   api.addMonitor(console.tron.apisauce)
  // }

  // const reduxMonitor = monitor => api.addMonitor(monitor)

  const setToken = authorization =>
    authorization ? {headers: {authorization}} : {};

  const login = data => api.post('/auth/login/costumer', data);
  const registeruser = data => api.post('/user/create', data);
  const getUsers = id => api.get(`/user/profile/${id}`,{})

  return {
    login,
    registeruser,
    getUsers
  };
};

// let's return back our create method as the default.
export default {create};
