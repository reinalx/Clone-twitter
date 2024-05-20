import { useState } from "react";
import { Settings } from "../../icons/Settings";

export function HeaderHome() {
	const [postForYou, setPostForYou] = useState(true);

	const handleOnClick = () => {
		setPostForYou(!postForYou);
	};

	return (
		<div className="feed-header">
			<div className="feed-header-element">
				<div>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<span
						className={
							postForYou ? "feed-header-active" : "feed-header-unactive"
						}
						onClick={postForYou ? null : handleOnClick}
					>
						For you
					</span>
					{postForYou && <div className="active-element" />}
				</div>
			</div>
			<div className="feed-header-element">
				<div>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<span
						className={
							postForYou ? "feed-header-unactive" : "feed-header-active"
						}
						onClick={postForYou ? handleOnClick : null}
					>
						Following
					</span>
					{!postForYou && <div className="active-element" />}
				</div>
			</div>
			<div className="feed-header-element">
				<Settings />
			</div>
		</div>
	);
}
