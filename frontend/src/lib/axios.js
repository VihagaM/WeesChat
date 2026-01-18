import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://unrepeatable-shanon-undangerously.ngrok-free.dev" : "/api",
  withCredentials: true,

});