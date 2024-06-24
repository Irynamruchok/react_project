import axios from "axios";
import {baseUrl} from "../config/urls";
import {apiToken} from "../tokens/apiToken";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use(
    request => {
        request.headers.Authorization = `Bearer ${apiToken}`
        return request
    }
)

export {
    axiosInstance
}