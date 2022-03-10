import axios from "axios";

const signup = payload => axios.post("/users", payload);

const login = payload => axios.post("/session", payload);

const authApi = {
  signup,
  login
};

export default authApi;
