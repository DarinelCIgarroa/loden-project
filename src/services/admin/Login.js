import { axiosInstance } from 'boot/axios'

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = 'api';

export const login = async (payload) => {
  const URL = `${basePath}/login`;
  const res = await axiosInstance.post(URL, payload);

  return res.data;
};

export const logout = async (id) => {
  const URL = `${basePath}/logout/${id}`;
  const res = await axiosInstance.get(URL);

  return res;
};

