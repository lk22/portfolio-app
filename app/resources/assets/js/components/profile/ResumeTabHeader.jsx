import React from 'react';

export const ResumeTabHeader = (props) => {
	return (
		<div className="row tab-header">
			<ul className="nav nav-tabs" role="tablist">
			    <li role="presentation"><a href="#jobs" aria-controls="home" role="tab" data-toggle="tab">Experiences & Jobs</a></li>
			    <li role="presentation"><a href="#langs" aria-controls="langs" role="tab" data-toggle="tab">Languages</a></li>
			    <li role="presentation"><a href="#educations" aria-controls="educations" role="tab" data-toggle="tab">Education</a></li>
		 	</ul>
		</div>
	);
};

export default ResumeTabHeader;