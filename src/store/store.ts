import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { summonerReducer, SummonerState } from '../reducers/summonerReducer';

export interface GlobalState {
    summoner: SummonerState;
}

const reducers = combineReducers({
    summoner: summonerReducer
});


export const store = createStore( 
    reducers, 
    composeWithDevTools(
        applyMiddleware( thunk )
    )
);