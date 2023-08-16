import axios from "axios";
import { baseurl } from "./Constants/constant";

const instance = axios.create({
  baseURL: baseurl,
});

export default instance;
