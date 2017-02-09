import React from 'react';

// main components
import Header from 'Header';

// child components
import MainBanner from 'MainBanner';

export const Main = (props) => {
	return (
		<div id="main">
			<Header/>
			<MainBanner />
			<div>
				{props.children}
			</div>
		</div>
	);
};

export default Main;