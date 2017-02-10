import React from 'react';

// child components
import Header from 'Header';
import ProfileImgSection from 'ProfileImgSection';
import ContactInformationSection from 'ContactInformationSection';

export const About = (props) => {
	return (
		<div id="about" className="container-fluid">
			<div className="col-md-4 about-left__profile">
				<ProfileImgSection img="/app/resources/assets/images/13895222_10210238589062414_6139610941734674905_n.jpg" name="Leo Knudsen" />
				<ContactInformationSection email="lkdevelop2200@gmail.com" phone="27 45 94 67" address="Guldbergsgade 113 4TV" city="2200 - København N" country="Danmark"/>
			</div>
		</div>
	);
};

export default About;