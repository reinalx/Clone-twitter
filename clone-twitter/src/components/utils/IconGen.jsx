export function IconGen({ color = "#1d9bf0", size = 24, styles = "", path }) {
	return (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			viewBox="0 -960 960 960"
			width={size}
			fill={color}
			className={styles}
		>
			<path d={path} />
		</svg>
	);
}
