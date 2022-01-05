import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import euwApi from '../apis/euwApi';
import { SummonerInfo, SummonerStats } from "../interfaces/summoner";
import { GlobalState } from "../store/store";
import { SummonerActions, SummonerState } from "../reducers/summonerReducer";
import europeApi from '../apis/europeApi';
import { loadMatches } from '../actions/summoner';
import { SummonerStatsComponent } from '../components/summoner/SummonerStatsComponent';
import { SummonerHeader } from "../components/summoner/SummonerHeader";
import { SummonerMatches } from "../components/summoner/SummonerMatches";

export const SummonerPage = () => {
	const { summonerName } = useParams();
	const dispatch = useDispatch();

	const { summonerInfo, summonerStats, matches }: SummonerState = useSelector(
		(state: GlobalState): SummonerState => state.summoner
	);

	useEffect(() => {
		euwApi
			.get<SummonerInfo>(
				`/lol/summoner/v4/summoners/by-name/${summonerName}`
			)
			.then(({ data }) =>
				dispatch({ type: "setSummoner", payload: data })
			);
	}, [summonerName]);

	useEffect(() => {
		if (summonerInfo) {
			euwApi
				.get<SummonerStats[]>(
					`/lol/league/v4/entries/by-summoner/${summonerInfo.id}`
				)
				.then(({ data }) =>
					dispatch({
						type: "setStats",
						payload: data[0],
					} as SummonerActions)
				);

            europeApi
                .get(`/lol/match/v5/matches/by-puuid/${ summonerInfo.puuid }/ids`, {
                    params: {
                        count: 10
                    }
                })
                .then( ({ data }) => {
                    loadMatches(data)
                        .then( (matchesData) => dispatch({ type: 'setMatches', payload: matchesData }) )
                })
            
		}
	}, [summonerInfo]);

	return (
		<div className="container mx-auto">

            {summonerInfo ? (
                <SummonerHeader />
            ) : 
            (
                <p>Cargando...</p>
            )
            }

            <div className="grid grid-cols-12 gap-8">

                {summonerStats ? (
                    <div className="col-span-3">
                        <SummonerStatsComponent />
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}

                { matches ? (
                    <div className="col-span-9">
                        <SummonerMatches />
                    </div>
                    )
                    :
                    <p>Cargando Games...</p>
                }

            </div>
		</div>
	);
};
