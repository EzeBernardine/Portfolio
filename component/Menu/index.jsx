import React, { useState, useEffect } from "react";
import { MenuStyle } from "./styles";
// import pdf from "../../public/images/My_Resume.pdf";
import { Flex } from "../Box/flexibleDiv.styles";
import MenuIcon from "../MenuIcon";
import Link from "next/link";

const Menu = ({ about, services, skills, experience, contact }) => {
	const [showMenuDropdown, setMenuDisplay] = useState(undefined);
	const  [menuScrollPosition, setMenuScrollPosition] = useState(null); 

	/**
	 * determines if the menu should be displayed or not and on which screen size.
	 */
	const handleDisplayMenu = () => setMenuDisplay(!showMenuDropdown);

	/**
	 * keeps track of the scrollY position of the page
	 * Its position is used to render the background color of the menu header
	 */
	const handleScroll = () => {
		setMenuScrollPosition(window.scrollY);
	}

	/**
	 * handles the onclick menu item scroll event.
	 * Ensures that on click of any menu item, the browser scrolls to that section of the page
	 */
	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);
	const executeScrollAbout = () => scrollToRef(about),
	executeScrollServices = () => scrollToRef(services),
	executeScrollSkills = () => scrollToRef(skills),
	executeScrollExperience = () => scrollToRef(experience),
	executeScrollContact = () => scrollToRef(contact);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll,  true );
		return () => window.removeEventListener("scroll", handleScroll, true);
	}, []);

	return (
		<MenuStyle
			showMenuDropdown={showMenuDropdown}
			menuScrollPosition={menuScrollPosition}
		>
			<header>
				<menu>
					<Flex className="navDiv" justifyContent="space-between">
					<h1>Bernardine</h1>
					<MenuIcon
						click={handleDisplayMenu}
						showMenuDropdown={showMenuDropdown}
					/>
					</Flex>

					<div className="linkDiv">
					<ul>
						<li
							onClick={() => {
								executeScrollAbout("about");
								handleDisplayMenu();
							}}
						>
							About
						</li>
						<li
							onClick={() => {
								executeScrollServices("services");
								handleDisplayMenu();
							}}
						>
						Services
						</li>
						<li
							onClick={() => {
								executeScrollExperience("experience");
								handleDisplayMenu();
							}}
						>
							Works
						</li>
						<li
							onClick={() => {
								executeScrollSkills("skills");
								handleDisplayMenu();
							}}
						>
							Stack
						</li>
						<li
							onClick={() => {
								executeScrollContact("contact");
								handleDisplayMenu();
							}}
						>
							Contact
						</li>
						<li>
						{/* <button onClick={() => window.open(pdf)}>Resume</button> */}
						</li>
						<li>
						<Link href="./blog">Blog</Link>
						</li>
					</ul>
					</div>
				</menu>
			</header>
		</MenuStyle>
	);
};
export default Menu;
