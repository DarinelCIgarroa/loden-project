import { axiosInstance } from "boot/axios";

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = "api/message";

export const submitEmail = async (payload) => {
  const URL = `${basePath}/send-email/client`;
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};
