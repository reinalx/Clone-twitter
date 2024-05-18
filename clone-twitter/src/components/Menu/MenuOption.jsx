export function MenuOption({ img, text }) {
	return (
		<>
			<div className="menu-option">
				{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d={img} />
				</svg>

				<span>{text}</span>
			</div>
		</>
	);
}
