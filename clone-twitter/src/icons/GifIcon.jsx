export function GifIcon({ color = "#1d9bf0", size = 24, styles }) {
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
			<path d="M336.41-398.09h41.68q17.71 0 29.81-12.05Q420-422.19 420-440v-41.91h-43.59v40h-38.32v-76.18H420q0-18.19-12.02-31.01-12.01-12.81-29.77-12.81h-41.8q-17.81 0-29.86 12.05T294.5-520v80q0 17.81 12.05 29.86t29.86 12.05Zm121.68 0h43.82v-163.82h-43.82v163.82Zm81.91 0h43.59v-56.41h60v-43.59h-60v-20h80v-43.82H540v163.82ZM202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h554.26q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H202.87Zm0-91h554.26v-554.26H202.87v554.26Zm0-554.26v554.26-554.26Z" />
		</svg>
	);
}
