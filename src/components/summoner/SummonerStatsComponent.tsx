import { useSelector } from "react-redux";
import { GlobalState } from "../../store/store";

export const SummonerStatsComponent = () => {
	const { summonerStats, summonerInfo } = useSelector(
		(state: GlobalState) => state.summoner
	);

    const image = require(`../../assets/ranked-emblems/${ summonerStats?.tier.toLowerCase() }.png`);

	return (
		<div className="w-full">
			<div className="border border-gray-400 bg-white rounded py-4 px-8 flex flex-row items-center leading-normal">
                <img src={ image } width={ '100px' }/>
				<div className="p-3 ml-5">
					<div className="text-gray-700 font-bold text-md capitalize">
						{ `${ summonerStats?.tier.toLowerCase() } ${ summonerStats?.rank }` }
					</div>
					<p className="text-gray-600 font-semibold text-xs">
                        { `${ summonerStats?.leaguePoints } LP` }
					</p>
                    <hr className="my-3"/>
					<p className="text-gray-500 font-semibold text-xs">
                        <span className="text-green-600">
                            { `${ summonerStats?.wins }W ` } 
                        </span>
                        /
                        <span className="text-red-600">
                            { ` ${ summonerStats?.losses }L` } 
                        </span>
					</p>
					<p className="text-gray-400 font-semibold text-xs tracking-wide">
                        { `Winrate: ${ Math.round(summonerStats?.wins! / (summonerStats?.wins! + summonerStats?.losses!) * 100) }%` }
					</p>
				</div>
			</div>
		</div>
	);
};
