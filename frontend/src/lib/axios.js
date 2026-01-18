import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://wees-chat.vercel.app/api" : "/api",
  withCredentials: true,

});
