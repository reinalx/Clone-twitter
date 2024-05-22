import { useState } from "react";
import { Close } from "../icons/Close";
import { Search } from "../icons/Search";

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

	return (
		<div className="sidebar-header">
			<Search focus={focus} size={20} />
			<input
				type="text"
				placeholder="Search"
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				onChange={handleOnChange}
			/>
			{query && focus && (
				<div className="bt-close">
					<Close size={18} color="#000000" />
				</div>
			)}
		</div>
	);
}
