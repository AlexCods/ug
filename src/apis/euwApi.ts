import axios from "axios";

const euwApi = axios.create({
    baseURL: 'https://euw1.api.riotgames.com',
    params: {
        api_key: 'RGAPI-b2da4008-9207-4f28-a1b0-70fe975bbf9c'
    }
})

export default euwApi;