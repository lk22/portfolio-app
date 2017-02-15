import React from 'react';

import Project from 'Project';

export const ProjectsGallery = (props) => {
	return (
		<div id="projectGallery">
			<Project classONe="col-md-6"
					 classTwo="col-md-4"
					 image="app/resources/assets/images/weatherreactapp.png"
					 imgHeight="250"
					 imgWidth="500"
					 title="React Weather"
					 link="http://agile-crag-41070.herokuapp.com/"
					 description="En lille applikation der kan fortælle dig grader i celsius i en hver by du søger efter.."
			/>

			<Project classONe="col-md-6"
					 classTwo="col-md-4"
					 image="app/resources/assets/images/Skærmbillede 2017-02-15 kl. 13.35.55.png"
					 imgHeight="250"
					 imgWidth="500"
					 title="React Timer & Countdown app"
					 link="http://arcane-crag-89126.herokuapp.com//"
					 description="En lille applikation der kan tælle 	"
			/>

			<Project classONe="col-md-6"
					 classTwo="col-md-4"
					 image="app/resources/assets/images/Skærmbillede 2017-02-15 kl. 13.37.31.png"
					 imgHeight="250"
					 imgWidth="500"
					 title="React Todo"
					 link="http://todosreact.herokuapp.com/"
					 description="En lille applikation der kan fortælle dig grader i celsius i en hver by du søger efter.."
			/>
		</div>
	);
};

export default ProjectsGallery;