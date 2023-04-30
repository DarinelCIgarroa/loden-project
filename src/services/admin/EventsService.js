import { axiosInstance } from "boot/axios";
const basePath = "api/event";

export const index = async () => {
  const URL = basePath;
  const res = await axiosInstance.get(URL);
  return res.data;
};
