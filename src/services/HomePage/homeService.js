import { axiosInstance } from "boot/axios";

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = "api/home";

export const getAllEvents = async () => {
  const url = `${basePath}/get-events`;
  const res = await axiosInstance.get(url);
  return res.data;
};
export const getEvents = async () => {
  const url = `${basePath}/get-events`;
  const res = await axiosInstance.get(url);
  return res.data;
};

export const getOnlineEvents = async () => {
  const url = `${basePath}/get-events-online`;
  const res = await axiosInstance.get(url);
  return res.data;
};

export const getInPersonEvents = async () => {
  const url = `${basePath}/get-events-in-person`;
  const res = await axiosInstance.get(url);
  return res.data;
};

export const getMembers = async () => {
  const url = `${basePath}/get-members`;
  const res = await axiosInstance.get(url);
  return res.data;
};

export const getDataCompany = async () => {
  const URL = '/api/home/company';
  const res = await axiosInstance.get(URL);
  return res;
};
