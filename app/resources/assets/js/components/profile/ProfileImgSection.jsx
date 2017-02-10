import React from 'react';

export const ProfileImgSection = (props) => {
	return (
		<div className="row left__profile_img">
			<img className="img img-circle center-block" src={props.img} height="150" width="150" alt=""/>
			<h4 className="text-center">{props.name}</h4>
		</div>
	);
};

export default ProfileImgSection;