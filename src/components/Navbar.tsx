import { Link } from "react-router-dom";
import { Finder } from "./Finder";

export const Navbar = () => {
	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link to="/">
					OPGG
				</Link>
				<div className="flex md:order-2">
					<Finder />
				</div>
			</div>
		</nav>
	);
};
