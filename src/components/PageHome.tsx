import brotherswater from "../assets/brotherswater.jpg";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import NavMenu from "./NavMenu.tsx";
import ShowDate from "./ShowDate.tsx";
import Clock from "./Clock.tsx";

export default function PageHome() {
	return (
		<div className="homepage">
			<section className="right-column">
				<NavMenu />
				<Header />
				<ShowDate />
				<Clock />
				<Footer />
			</section>
			<section className="left-column">
				<img src={brotherswater} alt="Cloud Image" />
			</section>
		</div>
	);
}
