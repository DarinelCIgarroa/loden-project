import { axiosInstance } from 'boot/axios'

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = 'api/team';

export const index = async (payload) => {
  const URL = `${basePath}/index`;
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};

export const store = async (payload) => {
  const URL = basePath;
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};

export const edit = async (id) => {
  const URL = `${basePath}/${id}/edit`;
  const res = await axiosInstance.get(URL);
  return res.data;
};

export const update = async (payload, id) => {
  const URL = `${basePath}/${id}`;
  const res = await axiosInstance.put(URL, payload);
  return res.data;
};

export const destroy = async (id) => {
  const URL = `${basePath}/${id}`;
  const res = await axiosInstance.delete(URL);
  return res.data;
};
