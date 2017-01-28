var React = require('react');

var Header = require('Header');

var Main = React.createClass({
	render: function() {
		return (
			<div id="main">
				<Header/>
				<h1 className="text-center">Boilerplate app</h1>
				<h4 className="text-center">Powered by </h4>
				<div className="container powered-by-container">

					<div className="col-md-4 powered-by">
						<img src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" height="200" width="200" alt=""/>
					</div>
					<div className="col-md-4 powered-by">
						<img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" height="200" width="200" alt=""/>
					</div>
					<div className="col-md-4 powered-by">
						<img src="http://www.shreetantransh.com/images/bootstrap.png" height="200" width="200" alt=""/>
					</div>
				</div>

				<h3 className="text-center see-more">Want to see more ReactJS projects by Leo Knudsen <a href="https://www.github.com/lk22">Click Here</a></h3>
			</div>
		);
	}
});

module.exports = Main;