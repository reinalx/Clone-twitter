import { useState } from "react";
import { Close } from "../../../icons/Close";
import { Search } from "../../../icons/Search";

export function SideHeader() {
	const [focus, setFocus] = useState(false);
	const [query, setQuery] = useState("");

	const handleOnFocus = () => {
		setFocus(true);
	};

	const handleOnBlur = () => {
		setFocus(false);
	};
	const handleOnChange = (event) => {
		event.preventDefault();
		const newQuery = event.target.value;
		setQuery(newQuery);
	};
	const handleOnClick = () => {
		setQuery("");
	};

	return (
		<div className="c-fixed-side">
			<div className={focus ? "searchBar-active" : "searchBar"}>
				<Search focus={focus} size={20} />
				<input
					type="text"
					placeholder="Search"
					className="inputSidebar"
					value={query}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
				/>

				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={handleOnClick} role="button" tabIndex={0}>
					{query && (
						<span className="bt-close">
							<Close size={18} color="#000000" />
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
