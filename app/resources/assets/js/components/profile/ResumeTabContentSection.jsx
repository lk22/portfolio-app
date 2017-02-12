import React from 'react';

export const ResumeTabContentSection = (props) => {
	return (
		<div className="tab-content row">

		  <div role="tabpanel" className="tab-pane fade in active" id="jobs">

		  	<div className="job">
		  		<div className="job__age">
		  			<h3>2013 - 2014</h3>
		  		</div>
		  		<div className="job__description">
		  			<h4>Frontend Udvikler - EduKarma ApS</h4>
		  			<h5>Stod for at kode designs til forskellige dele a EduKarmas daværende platform, udover det stod jeg for den responsive udvikling af platformen</h5>
		  			<h5>hvor jeg arbejdet med CSS/CSS3/SASS(SCSS), og Bootstrap samt jQuery</h5>
		  		</div>
		  	</div>

			<hr/>

		  	<div className="job">
		  		<div className="job__age">
		  			<h3>2014 - 2016</h3>
		  		</div>
		  		<div className="job__description">
		  			<h4>Backend & Test Udvikler - Athliit ApS</h4>
		  			<h5>Stod for al unit testing på platformen med hjælp af PHPUnit og Laravel 5.2 udover det stod jeg for at udvikle løsninger til platformen</h5>
		  		</div>
		  	</div>

		  </div>
		  <div role="tabpanel" className="tab-pane fade" id="langs">
		  	<div className="langs">
		  		<h3>Programmerings sprog</h3>
		  		<ul className="langs__list">
		  			<li className="lang">
		  				<h5>XHTML</h5>
		  			</li>

		  			<li className="lang">
		  				<h5>HTML5</h5>
		  			</li>

		  			<li className="lang">
		  				<h5>CSS, CSS3, Sass(SCSS)</h5>
		  			</li>

		  			<li className="lang">
		  				<h5>JavaScript</h5>
		  			</li>

		  			<li className="lang">
		  				<h5>PHP</h5>
		  			</li>
		  		</ul>
		  		<h3>Frameworks og CMS systemer</h3>
		  		<ul className="frameworkCMSList">
		  			<li className="framework">
		  				<h5>jQuery (JavaScript)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>ReactJS (JavaScript)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>Bootstrap (CSS, JavaScript)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>Foundation (CSS, JavaScript)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>Karma (JavaScript, Unit Testing)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>Mocha (JavaScript, Unit Testing)</h5>
		  			</li>

		  			<li className="framework">
		  				<h5>Laravel (PHP)</h5>
		  			</li>

		  			<li className="CMS">
		  				<h5>WordPress (PHP)</h5>
		  			</li>

		  			<li className="CMS">
		  				<h5>Squarespace (JSON)</h5>
		  			</li>
		  		</ul>

				<h3>Værktøjer og API´er</h3>
		  		<ul className="toolsList">
		  			<li className="tool">
		  				<h5>Git (Github)</h5>
		  			</li>

		  			<li className="tool">
		  				<h5>Google Map API </h5>
		  			</li>
		  		</ul>
		  	</div>
		  </div>
		  <div role="tabpanel" className="tab-pane fade" id="education">...</div>
		</div>
	);
};

export default ResumeTabContentSection;