import { axiosInstance } from "boot/axios";

const basePath = "api/message";

export const index = async (payload) => {
  const URL = `${basePath}/index`;
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};

export const destroy = async (id) => {
  const URL = `${basePath}/${id}`;
  const res = await axiosInstance.delete(URL);
  return res.data;
};
