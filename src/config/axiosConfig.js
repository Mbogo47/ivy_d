import apiEndpoint from "./environment";
import store from "../store";
import axios from "axios";

const axiosClient = axios.create();

const authHeader = (config) => {
  const state = store.getState();
  const token = state.auth.token;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  return config;
};

axiosClient.defaults.baseURL = apiEndpoint;
axiosClient.interceptors.request.use(authHeader);

axiosClient.interceptors.request.use(
  (response) => {
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export async function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then((response) => response.data);
}

export async function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response.data);
}

export async function patchRequest(URL, payload) {
  return axiosClient
    .patch(`/${URL}`, payload)
    .then((response) => response.data);
}

export async function putRequest(URL, payload) {
  return axiosClient.put(`/${URL}`, payload).then((response) => response.data);
}

export async function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response.data);
}
