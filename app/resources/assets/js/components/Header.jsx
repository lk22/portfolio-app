import  React from 'react';
import {Link, IndexLink} from 'react-router';

export const Header = (props) => {
	return (
		<div id="app-header" className="container-fluid">
			<div className="left-header col-md-2">
				<h5 className="brand-name">LEO KNUDSEN</h5>
			</div>
			<div className="right-header col-md-4 col-md-offset-6">
				<ul className="menu">
					<li><Link className="menu-link" to="/about" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>About</Link></li>
					<li><Link className="menu-link" to="/examples" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Projects</Link></li>
					<li><Link className="menu-link" to="/contact" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Contact</Link></li>
				</ul>
			</div>
		</div>
	);
};

export default Header;