import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import {getApiEndpoints} from '../utils';

let axiosInstance;
function createAxiosInstance(){
  const baseUrl = getBaseUrl();
  const defaultOptions = {
    baseUrl,
    headers:{
      'Content-Type': 'application/json',
    }
  };
  axiosInstance = axios.create(defaultOptions);
  axios.interceptors.request.use(handleRequestInterceptor);
  axios.interceptors.response.use(handleResponseInterceptor);
}

function getBaseUrl(){
  return getApiEndpoints().baseUrl;
}

function handleRequestInterceptor(request){
  console.log(serialize(request));
  return request;
}

function handleResponseInterceptor(response){
  console.log(serialize(response));
  return response;
}

function serialize(obj){
  return JSON.stringify(obj);
}

// Api methods
function getData(url){
  return axiosInstance.get(url);
}

function postData(url, body){
  return axiosInstance.post(url, body);
}

function putData(url, body){
  return axiosInstance.put(url, body);
}


export{
  getData,
  postData,
  putData,
  createAxiosInstance,
}
