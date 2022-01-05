import { Match } from "../../interfaces/summoner";
import { getParticipant } from "../../helpers/matchHelper";
import { useSelector } from "react-redux";
import { GlobalState } from "../../store/store";
import moment from "moment";

interface Props {
	match: Match;
}

export const MatchResume = ({ match }: Props) => {
	const { summonerInfo } = useSelector(
		(state: GlobalState) => state.summoner
	);

	if (!summonerInfo) return <h1>Cargando...</h1>;

	const participant = getParticipant(
		summonerInfo?.puuid,
		match.info.participants
	);

	const { assists, kills, deaths, win } = participant;

	let diaJuego: string = "";
	const end = moment(match.info.gameEndTimestamp);
	const duration = moment.duration(moment().diff(end));

	const minutes = duration.asMinutes();
	if (minutes > 0) {
		diaJuego = `hace ${Math.round(minutes)} minutos`;
	}

	const hours = duration.asHours();
	if (hours > 0) {
		diaJuego = `hace ${Math.round(hours)} horas`;
	}

	const days = duration.asDays();
	if (days > 0) {
		diaJuego = `hace ${Math.round(days)} días`;
	}

	return (
		<div
			className={`border rounded py-4 px-8 flex flex-row items-center leading-normal mb-4 ${
				win === true
					? "bg-green-300 border-green-600"
					: "bg-red-300 border-red-500"
			}`}
		>
			<div className="flex flex-col">
				<p className="text-xs text-gray-700 font-semibold">
					{match.info.gameMode}
				</p>
				<p className="text-xs text-gray-600">{diaJuego}</p>
				<hr className="my-2 border-gray-500" />

				{win ? (
					<p className="text-green-800 text-sm font-semibold">
						Victoria
					</p>
				) : (
					<p className="text-red-800 text-sm font-semibold">
						Derrota
					</p>
				)}
			</div>
            <div className="flex flex-col ml-6">
                <img className="rounded-full" style={{ width: '60px' }} src={ `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${ participant.championName }.png` } alt="" />
                <p className="text-xs text-gray-800 text-center mt-1">{ participant.championName }</p>
            </div>
            <div className="flex flex-col ml-10">
                <p className="text-sm font-semibold justify-self-start">
                    { `${ kills } / ${ deaths } / ${ assists }`}
                </p>
            </div>
            <div className="flex flex-col ml-10 text-center">
                <p className="text-sm">
                    Nivel { participant.champLevel }
                </p>
                <p className="text-sm">
                    { participant.totalMinionsKilled } cs
                </p>
                <p className="text-sm">
                    { participant.visionScore } vision
                </p>
            </div>
		</div>
	);
};
