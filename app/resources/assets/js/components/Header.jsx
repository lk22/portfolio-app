var React = require('react');
var {Link, IndexLink} = require('react-router');

const Header = (props) => {
	return (
		<div id="app-header" className="container-fluid">
			<div className="left-header col-md-2">
				<h5 className="brand-name">React Boilerplate</h5>
			</div>
			<div className="right-header col-md-4 col-md-offset-6">
				<ul className="menu">
					<li><Link className="menu-link" to="/about" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>About</Link></li>
					<li><Link className="menu-link" to="/examples" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Examples</Link></li>
					<li><Link className="menu-link" to="/contact" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Contact</Link></li>
					<li><a className="fork-me" href="https://www.github.com/lk22/ReactBoilerplate">Github</a></li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Header;