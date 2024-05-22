import { useState } from "react";
import { trends } from "../../const";
import { TrendItem } from "./TrendItem";

export function Trends() {
	const [focus, setFocus] = useState(false);

	const handleOver = () => {
		setFocus(true);
	};

	const handleOut = () => {
		setFocus(false);
	};

	return (
		<div className="trends">
			<h3 className="title">Spain Trends</h3>
			<div className="container">
				{trends.map((trend, index) => (
					<TrendItem trend={trend} index={index} key={trend.nameTrend} />
				))}
			</div>
			<footer className="trends-footer">
				<h4>
					<a className="normalLink" href="https://twitter.com/i/trends">
						Show more
					</a>
				</h4>
			</footer>
		</div>
	);
}
