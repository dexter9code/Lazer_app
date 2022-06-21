import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.40:8787/api",
});

export default apiClient;
