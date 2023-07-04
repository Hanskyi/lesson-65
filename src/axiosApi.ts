import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://js-course-18-18-default-rtdb.europe-west1.firebasedatabase.app/pages'
});

export default axiosApi;