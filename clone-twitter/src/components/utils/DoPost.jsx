import { useState } from "react";
import { GifIcon } from "../../icons/GifIcon";
import { List } from "../../icons/List";
import { Location } from "../../icons/Location";
import { Picture } from "../../icons/Picture";
import { Schedule } from "../../icons/Schedule";
import { Smile } from "../../icons/Smile";
import { World } from "../../icons/World";

export function DoPost({ imgUser }) {
	const [textareaHeight, setTextareaHeight] = useState(48);
	const [text, setText] = useState("");
	const [numRows, setNumRows] = useState(1);

	const handleOnChange = (event) => {
		const text = event.target.value;
		const newRows = countLines(text);

		if (newRows > numRows) {
			setTextareaHeight(textareaHeight + 24);
		} else if (newRows < numRows) {
			setTextareaHeight(textareaHeight - 24);
		}

		setNumRows(newRows);
		setText(text);
	};

	const countLines = (text) => {
		// Dividimos el texto en líneas usando el salto de línea como separador y contamos las líneas
		return text.split("\n").length;
	};

	return (
		<div className="doPost">
			<header>
				<img className="img-user" src={imgUser} alt="foto del usuario" />
			</header>
			<div className="doPost-content">
				<textarea
					name="post"
					placeholder="What is happening?"
					onChange={handleOnChange}
					style={{ height: textareaHeight }}
				/>
				<div className="doPost-content-text">
					<World />
					<span>Everyone can reply</span>
				</div>
				<div className="doPost-actions">
					<div>
						<Picture size={20} styles="icon" />
						<GifIcon size={20} styles="icon" />
						<List size={20} styles="icon" />
						<Smile size={20} styles="icon" />
						<Schedule size={20} styles="icon" />
						<Location size={22} styles="icon" />
					</div>
					<button>Post</button>
				</div>
			</div>
		</div>
	);
}
