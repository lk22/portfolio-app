var React = require('react');

var Header = require('Header');

var Main = React.createClass({
	render: function() {
		return (
			<div id="main">
				<Header/>
				<h1 className="text-center">ReactJS Boilerplate</h1>
				<h4 className="text-center">Powered by ReactJS framework</h4>
				<h3 className="text-center">Want to see more ReactJS projects by Leo Knudsen <a href="https://www.github.com/lk22">Click Here</a></h3>
			</div>
		);
	}
});

module.exports = Main;