import { axiosInstance } from "boot/axios";
const basePath = "api/event";

export const index = async (payload) => {
  const URL = `${basePath}/index`;
  const res = await axiosInstance.post(URL, payload);
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
