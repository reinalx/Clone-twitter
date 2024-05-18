import { useState } from "react";
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
						<span>b1</span>
						<span>b2</span>
						<span>b3</span>
						<span>b4</span>
						<span>b5</span>
					</div>
					<button>Post</button>
				</div>
			</div>
		</div>
	);
}
