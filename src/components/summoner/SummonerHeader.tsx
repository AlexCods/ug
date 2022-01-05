import { useSelector } from "react-redux";
import { GlobalState } from '../../store/store';


export const SummonerHeader = () => {

    const { summonerStats, summonerInfo } = useSelector(
		(state: GlobalState) => state.summoner
	);

    return (
        <div className="mt-10 mb-10 px-10 flex items-center">
            <div className="rounded-full w-32 h-32 bg-cover bg-center flex items-end justify-center border-orange-400 border-2" style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/${ summonerInfo?.profileIconId }.png)`}}>
                <div className="bg-slate-800 text-white relative top-2 px-1.5 py-0.5 rounded-lg text-xs border-orange-400 border-2">
                    { summonerInfo?.summonerLevel }
                </div>
            </div>
            <div className="ml-5">
                <h1 className="text-2xl font-bold">{ summonerInfo?.name }</h1>
            </div>
        </div>
    )
}
