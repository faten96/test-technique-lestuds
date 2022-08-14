import axios from "axios";


export default function useApi() {
    const request = async (path, method, params, payload) => {
        const response = await axios.request({
            data: payload,
            method,
            url: 'https://pixabay.com/api' + path,
            params: {
                ...params,
                key: '17555297-46a99d3dc7abf78679ec9e640' // TODO: Replace with env var ...
            }
        });
        return response.data;
    }

    return {
        request,
        get: (path, params) => request(path, 'GET', params)
    };
};