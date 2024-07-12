import axios from "axios";

const apiService = axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v1/'});

export {
    apiService
}