import { useState } from "react";
import { More } from "../../icons/More";

export function TrendItem({ trend, index }) {
	const [focus, setFocus] = useState(false);

	const handleOver = () => {
		setFocus(true);
	};

	const handleOut = () => {
		setFocus(false);
	};

	//Falta añadir el contorno para el More
	return (
		<div className="trendItem" key={trend.nameTrend}>
			<header className="trendItem-header">
				<div>
					{index + 1} - {trend.category} · Trending
				</div>
				<div
					className="trendItem-more"
					onMouseOver={handleOver}
					onFocus={handleOver}
					onBlur={handleOut}
					onMouseOut={handleOut}
				>
					<More focus={focus} />
				</div>
			</header>
			<span>{trend.nameTrend}</span>
			<footer>
				<span>{trend.numPost}</span>
			</footer>
		</div>
	);
}
