import axios from "axios";


const europeApi = axios.create({
    baseURL: 'https://europe.api.riotgames.com',
    params: {
        api_key: 'RGAPI-b2da4008-9207-4f28-a1b0-70fe975bbf9c'
    }
});

export default europeApi;