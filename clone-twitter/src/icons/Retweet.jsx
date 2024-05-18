export function Retweet({ focus }) {
	return !focus ? (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#999999"
		>
			<path d="M246.15-220 100-366.15l42.15-43.39 74.01 74v-297.15q0-61 42.96-103.96 42.96-42.96 103.96-42.96 61 0 103.96 42.96Q510-693.69 510-632.69v265.77q0 36.07 25.42 61.5Q560.85-280 596.92-280q36.08 0 61.5-25.42 25.43-25.43 25.43-61.5v-297.16l-74 74-42.16-43.38 146.16-146.15L860-633.46l-42.15 43.38-74.01-74v297.16q0 61-42.96 103.96Q657.92-220 596.92-220q-61 0-103.96-42.96Q450-305.92 450-366.92v-265.77q0-36.08-25.42-61.5-25.43-25.43-61.5-25.43-36.08 0-61.5 25.43-25.43 25.42-25.43 61.5v297.15l74-74 42.16 43.39L246.15-220Z" />
		</svg>
	) : (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#00BA7C"
		>
			<path d="M246.15-220 100-366.15l42.15-43.39 74.01 74v-297.15q0-61 42.96-103.96 42.96-42.96 103.96-42.96 61 0 103.96 42.96Q510-693.69 510-632.69v265.77q0 36.07 25.42 61.5Q560.85-280 596.92-280q36.08 0 61.5-25.42 25.43-25.43 25.43-61.5v-297.16l-74 74-42.16-43.38 146.16-146.15L860-633.46l-42.15 43.38-74.01-74v297.16q0 61-42.96 103.96Q657.92-220 596.92-220q-61 0-103.96-42.96Q450-305.92 450-366.92v-265.77q0-36.08-25.42-61.5-25.43-25.43-61.5-25.43-36.08 0-61.5 25.43-25.43 25.42-25.43 61.5v297.15l74-74 42.16 43.39L246.15-220Z" />
		</svg>
	);
}