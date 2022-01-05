import europeApi from "../apis/europeApi"


export const loadMatches = async ( matches: string[] ) => {

    const matchesPromise = Promise.all( matches.map( async (matchId) => {
        const { data } = await europeApi.get(`/lol/match/v5/matches/${ matchId }`);
        return data;
    }));

    return matchesPromise;

}