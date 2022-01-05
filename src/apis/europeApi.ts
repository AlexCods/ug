import axios from "axios";


const europeApi = axios.create({
    baseURL: 'https://europe.api.riotgames.com',
    params: {
        api_key: 'RGAPI-95b35c67-399c-4fd7-84f8-60b29e32b3c2'
    }
});

export default europeApi;