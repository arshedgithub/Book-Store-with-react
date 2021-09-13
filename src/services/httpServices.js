import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  if (!error.response) return console.log(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
