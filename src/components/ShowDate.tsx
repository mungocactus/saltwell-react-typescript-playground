import { WEEK_DAYS, MONTHS } from "../data.tsx";

export default function ShowDate() {
	const currentTime = new Date();

	return (
		<div className="calendar">
			<h2>{WEEK_DAYS[currentTime.getDay()]}</h2>
			<div className="date">
				<h3>
					{currentTime.getDate()} {MONTHS[currentTime.getMonth()]}{" "}
					{currentTime.getFullYear()}
				</h3>
			</div>
		</div>
	);
}
