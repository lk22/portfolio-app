import React from 'react';

// child components
import ProjectsGallery from 'ProjectsGallery';
import ProjectHeader from 'ProjectHeader';

export const Projects = (props) => {
	return (
		<div id="projects">
			<div className="home">
				<a href="/"><span className="glyphicon glyphicon-remove"></span></a>
			</div>
			<ProjectHeader />
			<ProjectsGallery />
		</div>
	);
};

export default Projects;