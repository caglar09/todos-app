/* eslint-disable import/no-cycle */
import AxiosProvider from "axios";
import { ENV } from "../../config";

AxiosProvider.defaults.headers["Content-Type"] = "application/json";
AxiosProvider.defaults.baseURL = ENV.BASE_URL;

const get = (url, config) => {
  return AxiosProvider.get(url, config);
};

const post = (url, data, config) => {
  return AxiosProvider.post(url, data, config);
};

const put = (url, data, config) => {
  return AxiosProvider.put(url, data, config);
};

const deleteMethod = (url, data, config) => {
  return AxiosProvider.delete(url, data, config);
};

const axios = AxiosProvider;

export { axios, get, post, put, deleteMethod };
