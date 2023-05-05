import { axiosInstance } from "boot/axios";
const basePath = "api/event";

export const index = async (payload) => {
  const URL = `${basePath}/index`;
  const res = await axiosInstance.post(URL, payload);
  return res.data;
};

export const store = async (payload) => {
  const URL = basePath;

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  const res = await axiosInstance.post(URL, payload, { headers }).then((res) => res.data.file)
  return res.data;
}
export const update = async (payload, id) => {
  const URL = `${basePath}/${id}`;
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  const res = await axiosInstance.post(URL, payload, { headers }).then((res) => res.data.file)
  return res.data
};

export const destroy = async (id) => {
  const URL = `${basePath}/${id}`;
  const res = await axiosInstance.delete(URL);
  return res.data;
};
