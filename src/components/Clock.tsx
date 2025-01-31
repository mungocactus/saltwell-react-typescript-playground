import { useState, useEffect } from "react";

export default function Clock() {
	const [timerClock, setTimerClock] = useState(new Date());

	useEffect(() => {
		const timerClock = setInterval(() => {
			setTimerClock(new Date());
		}, 1000);
		return () => clearInterval(timerClock);
	}, []);

	return (
		<div className="clockTimer">
			<h3>{timerClock.toLocaleTimeString()}</h3>
		</div>
	);
}
