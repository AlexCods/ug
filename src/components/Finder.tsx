import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Finder = () => {

    const navigate = useNavigate();
    const [summonerName, setSummonerName] = useState('');

    const findSummoner = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/summoner/${ summonerName }`);
        setSummonerName('');
    }

	return (
		<form onSubmit={findSummoner}>
			<input
				type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				onChange={(e) => setSummonerName(e.target.value)}
				value={summonerName}
			/>
		</form>
	);
};
