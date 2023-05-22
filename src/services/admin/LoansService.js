import { axiosInstance } from 'boot/axios'

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = 'api/company';

export const index = async () => {
  const URL = basePath;
  const res = await axiosInstance.get(URL);
  return res.data;
};

export const store = async (payload) => {
  const URL = basePath;
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  const res = await axiosInstance.post(URL, payload, { headers }).then((res) => res)
  return res.data;

}
export const getLogo = async (payload) => {
  const URL = `${basePath}/logo`;
  const res = await axiosInstance.post(URL, payload);
  return res;
};

