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

  return axiosInstance.post(URL, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => res);
};



export const uploadLogo = (payload) => {
  const URL = `${basePath}/upload/logo`;
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  return axiosInstance.post(URL, payload, { headers }).then((res) => res.data.file);
};
