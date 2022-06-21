import apiClient from "./Client";

const Login = (email, password) => {
  apiClient.post("/auth", { email, password });
};

export default Login;
