import { axiosInstance } from "boot/axios";

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = "api/home";

export const getEvents = async () => {
  const url = `${basePath}/get-events`;
  const res = await axiosInstance.get(url);
  return res.data;
};
