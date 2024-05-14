import "../styles/globals.css";
import Head from "next/head";
import { theme } from "../config/theme";
import { ThemeProvider } from "styled-components";
import React from "react";



function MyApp({ Component, pageProps }) {
	
 
 

	return (
		<>
			<Head>

				<link rel="icon" href="../public/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
				<link rel="manifest" href="../public/site.webmanifest" />
				 

				<meta property="og:type" content="website" />
				<meta property="og:author" content="Bernardine's Portfolio" />
				<meta property="og:title" content="Bernardine's Portfolio" />
				<meta property="og:description" content="About Bernardine May, and few  of her works" />
		 
				<meta property="og:image:alt" content="Bernardine's Portfolio" />
				<meta name="description" content="About Bernardine May, and few  of her works" />
				<meta name="keywords" content="Bernardine's Portfolio, frontend engineer" />
			 
				<title>Eze Bernardine May</title>



			</Head>

 
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		 
	 
			
		</>
	);
}

export default MyApp;

