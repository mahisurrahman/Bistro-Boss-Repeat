import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:7000'
});

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;