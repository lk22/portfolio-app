import  React from 'react';
import {Link, IndexLink} from 'react-router';

export const Header = (props) => {
	return (
		<div id="app-header" className="container-fluid">
			<div className="left-header col-md-2">

			</div>
			<div className="right-header col-md-4 col-md-offset-6">
				<ul className="menu">
					<li><Link className="menu-link" to="/about" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Om mig</Link></li>
					<li><Link className="menu-link" to="/examples" activeClassName="active" activeStyle={ { fontWeight: "bold" } }>Projekter</Link></li>
				</ul>
			</div>
		</div>
	);
};

export default Header;