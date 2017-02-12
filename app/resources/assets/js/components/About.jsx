import React from 'react';

// child components
import Header from 'Header';
import ProfileImgSection from 'ProfileImgSection';
import ContactInformationSection from 'ContactInformationSection';
import Resume from 'Resume';

export const About = (props) => {
	return (
		<div id="about" className="container-fluid">
			<div className="goHome">
				<a href="/"><span className="glyphicon glyphicon-remove"></span></a>
			</div>
			<div className="col-md-4 about-left__profile">
				<ProfileImgSection img="/app/resources/assets/images/13895222_10210238589062414_6139610941734674905_n.jpg" name="Leo Knudsen" title="Full Stack Udvikler & Konsulent"/>
				<ContactInformationSection email="lkdevelop2200@gmail.com" phone="27 45 94 67" address="Guldbergsgade 113 4TV" city="2200 - København N" country="Danmark"/>
			</div>
			<div className="col-md-7 col-md-offset-1 about-right__profile">
				<Resume />
			</div>
		</div>
	);
};

export default About;