import axios from "axios";

const euwApi = axios.create({
    baseURL: 'https://euw1.api.riotgames.com',
    params: {
        api_key: 'RGAPI-95b35c67-399c-4fd7-84f8-60b29e32b3c2'
    }
})

export default euwApi;