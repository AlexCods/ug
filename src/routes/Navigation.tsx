import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OpggApp } from '../OpggApp';
import { SummonerPage } from '../pages/SummonerPage';
import { Navbar } from '../components/Navbar';

export const Navigation = () => {
	return (
		<BrowserRouter>
	      	<Navbar />
			<Routes>
				<Route path="/" element={<OpggApp />} />
				<Route path="/summoner/:summonerName" element={<SummonerPage />} />
			</Routes>
		</BrowserRouter>
	);
};
