import { SummonerInfo, SummonerStats, Match } from '../interfaces/summoner';


export interface SummonerState {
    summonerInfo?: SummonerInfo,
    summonerStats?: SummonerStats,
    matches?: Match[]
}

export type SummonerActions =
    | { type: 'setSummoner', payload: SummonerInfo }
    | { type: 'setStats', payload: SummonerStats }
    | { type: 'setMatches', payload: Match[] }

export const summonerReducer = ( state: SummonerState = {}, action: SummonerActions ) => {
    
    switch ( action.type ) {

        case 'setSummoner':
            return {
                summonerInfo: action.payload
            };

        case 'setStats':
            return {
                ...state,
                summonerStats: action.payload
            };

        case 'setMatches':
            return {
                ...state,
                matches: action.payload
            }

        default:
            return state;

    }

}
