import React from 'react';

import ResumeTabHeader from 'ResumeTabHeader';
import ResumeTabContentSection from 'ResumeTabContentSection';

export const Resume = (props) => {
	return (
		<div id="resume" className="row right__profile-resumne">
			<ResumeTabHeader />
			<ResumeTabContentSection />
		</div>
	);
};

export default Resume;