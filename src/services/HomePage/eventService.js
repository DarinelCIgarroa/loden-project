import { axiosInstance } from "boot/axios";

/* La nomenclatura sugerida es la siguiente

  * index: /api/user GET
  * get: /api/user/{id} GET
  * store: /api/user POST
  * update: /api/user PUT
  * destroy: /api/user DELETE
  * */
const basePath = "api/event";

export const getEvent = async () => {
  const URL = `${basePath}/get-event`;
  const res = await axiosInstance.get(URL);
  return res.data;
};

