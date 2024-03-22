import React from "react";
import { StackContainer, StackText, WorksStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
 

const Works = () => {
	const collection = [
		{
			img: require("../../assets/images/experience/bitville.png"),
			expKey: 1,
			href: "https://bitville.academy/",
			name: "Bitville",
			stacks: ["Javascript", "React", "styled component", "Node", "Nextjs"],
			detail: "Platform for learning how to trade cryptocurrency.",
		},
		{
			img: require("../../assets/images/experience/showafrica.png"),
			expKey: 1,
			href: "https://showafrica.netlify.app/",
			name: "Showafrica",
			stacks: ["Javascript", "React", "styled component",  "Nextjs", "Chartjs"],
			detail: "A   platform that gamifies most African shows.",
		},
		{
			img: require("../../assets/images/experience/suregift.png"),
			expKey: 13,
			href: "https://suregifts.com.ng/",
			name: "Suregift",
			stacks: ["Javascript", "React", "Material UI", ],
			detail: "Buy Gift Cards For The Best Stores In Nigeria",
		},
		{
			img: require("../../assets/images/experience/weatherapp.png"),
			expKey: 15,
			href: "https://weather-outlook-today.netlify.app/",
			name: "Weather App",
			stacks: ["Javascript",   "styled component",   "Nextjs"],
			detail: "Check the weather condition of a specific area",
		},
		{
			img: require("../../assets/images/experience/GC.png"),
			expKey: 15,
			href: "https://bernarsgithubclone.netlify.app/",
			name: "Github Clone",
			stacks: ["Javascript", "HTML", "CSS",  ],
			detail: "My github page clone",
		},
	];

	return (
		<WorksStyle>
		<div className="container">
			<section>
				<Flex alignItems="first baseline">
					<div className="images">
						{collection.map(({ img, expKey, href, name, stacks, detail }) => (
							<Flex className="work" alignItems="flex-start">
								<Flex className="work-img" width="50%">
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="imageAnchor"
										key={expKey}
									>
										<Flex className="pictureFrame">
											<img src={img} alt="" />
										</Flex>
									</a>
								</Flex>

								<Flex
									className="work-details"
									width="50%"
									flexDir="column"
									alignItems="flex-start"
								>
									<h2 className="work-name">{name}</h2>
									<div className="work-stack">

										<ul>
											{stacks.map((stack) => (
												<li>
													<StackContainer margin="0 10px 10px 0" justifyContent="flex-start">
														<StackText>{stack}</StackText>
													</StackContainer>
												</li>
											))}
										</ul>
									</div>

									<p className="work-review">{detail}</p>
								</Flex>
							</Flex>
						))}
					</div>
				</Flex>
			</section>
		</div>
		</WorksStyle>
	);
};
export default Works;
