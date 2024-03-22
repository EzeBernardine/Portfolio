
import React from "react";


export const CheckMarkIcon = ({ height, width, colour, colour2 }) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 512 512"
	>
		<path
			d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256z"
			fill={ colour ||  "currentColor"}
		/>
		<path
			d="m379.8 169.7c6.2 6.2 6.2 16.4 0 22.6l-150 150c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7l-75-75c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l63.7 63.7 138.7-138.7c6.2-6.3 16.4-6.3 22.6 0z"
			strokeWidth={30}
			stroke={ colour2||  "currentColor"}
			width={width || "52"}
		/>
	</svg>
);