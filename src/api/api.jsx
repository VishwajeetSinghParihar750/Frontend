import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://capstone-be-8myf.onrender.com"
});

export default instance;