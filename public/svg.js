 
import React from "react";
 
 



 
export const TwitterIcon = ({ height, width, colour }) => (
	<svg
		height={height || "52"}
		fill={ colour|| "currentColor"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 512 512"
	>
		<g>
			<path
				d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016  c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992  c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056  c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152  c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792  c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44  C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568  C480.224,136.96,497.728,118.496,512,97.248z"
				fill={
					colour ||  "currentColor"
				}
				data-original="#03a9f4"
			/>
		</g>
	</svg>
);
export const FacebookIcon = ({ height, width, colour }) => (
	<svg
		height={height || "52"}
		fill={ colour || "currentColor"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 32 32"
	>
		<path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/>

	</svg>
);
 
export const InstagramIcon = ({ height, width, colour }) => (
	<svg
		height={height || "52"}
		fill={
			colour ||  "currentColor"
		}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="76" r="12"/> 
	</svg>
);




