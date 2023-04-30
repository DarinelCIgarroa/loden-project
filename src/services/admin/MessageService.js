import { axiosInstance } from "boot/axios";

const basePath = "api/message";

export const index = async () => {
  const URL = basePath;
  const res = await axiosInstance.get(URL);
  return res.data;
};
