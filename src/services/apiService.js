import axios from 'axios';
import {BASE_URL} from '../constants/apiURL';

export const getCall = async endpoint => {
  const result = await axios.get(`${BASE_URL}/${endpoint}`);
  return result;
};

export const postCall = async (endpoint, data) => {
  const result = await axios.post(`${BASE_URL}/${endpoint}`, data);
  return result;
};

export const putCall = async (endpoint, data) => {
  const result = await axios.put(`${BASE_URL}/${endpoint}`, data);
  return result;
};

export const patchCall = async endpoint => {
  const result = await axios.patch(`${BASE_URL}/${endpoint}`);
  return result;
};

export const deleteCall = async endpoint => {
  const result = await axios.delete(`${BASE_URL}/${endpoint}`);
  return result;
};
