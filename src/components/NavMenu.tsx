import { NavLink } from "react-router-dom";
import tree from "../assets/tree-silhouette.png";

export default function NavMenu() {
	return (
		<div className="nav-container">
			<nav>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : " ")}
				>
					Home
				</NavLink>
				<NavLink
					to="/about-you"
					className={({ isActive }) => (isActive ? "active" : " ")}
				>
					About You
				</NavLink>
				<NavLink
					to="/currency-converter"
					className={({ isActive }) => (isActive ? "active" : " ")}
				>
					Currency Converter
				</NavLink>
			</nav>
			<img src={tree} alt="silhouette of oak tree" />
		</div>
	);
}
