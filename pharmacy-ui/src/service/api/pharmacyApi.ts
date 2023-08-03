import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://localhost:7128/api/Pharmacy",
  });
};
