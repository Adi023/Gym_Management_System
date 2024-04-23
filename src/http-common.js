import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:5000/gym",
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //   },
    //   withCredentials: true,
});