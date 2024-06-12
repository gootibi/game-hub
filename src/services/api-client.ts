import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fe93bb1ce48b4e56958320adc76d1381",
    },
});

class APIClient<T> {
    endpont: string;

    constructor(endpont: string) {
        this.endpont = endpont;
    };

    getAll = (config: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchResponse<T>>(this.endpont, config)
            .then(response => response.data)
}

export default APIClient;