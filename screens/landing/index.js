 
import React, {  useRef,   }   from "react";

  
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import About from "../../component/About";
import Services from "../../component/Services";
import Experience from "../../component/Experience";
import Works from "../../component/works";
import Stack from "../../component/Stacks";
import ContactMe from "../../component/ContactMe";
import Footer from "../../component/Footer";






const LandingPage = () => {



	const about = useRef(null),
    services = useRef(null),
    contact = useRef(null),
    skills = useRef(null),
    experience = useRef(null);



 

	return (
		<div>
			<Menu
				about={about}
				skills={skills}
				experience={experience}
				services={services}
				contact={contact}
			/>
			<Header />
			<About about={about} />
			<Services services={services} />
			<Experience experience={experience} />
			<Works />
			<Stack skills={skills} />
			<ContactMe contact={contact} />
			<Footer />
		</div>

	);
};

export default LandingPage;
