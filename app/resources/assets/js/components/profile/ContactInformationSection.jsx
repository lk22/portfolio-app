import React from 'react';

export const ContactInformationSection = (props) => {
	return (
		<div className="row left__profile_contact_information">
			<h5 className="grey-text">Kontakt Information</h5>
			<br/>
			<p className="grey-text">Email:</p>
			<p>{props.email}</p>
			<br/>
			<p className="grey-text">Telefon:</p>
			<p>+45 {props.phone}</p>
			<br/>
			<p className="grey-text">Addresse:</p>
			<p>{props.address}</p>
			<p>{props.city} - {props.country}</p>
		</div>
	);
};

export default ContactInformationSection;