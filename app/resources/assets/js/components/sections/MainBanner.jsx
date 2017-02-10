import React from 'react';

export const MainBanner = (props) => {
	return (
		<div id="main-banner" className="container-fluid">
			<div id="main-banner-overlay" className="center block">
				<h2 className="text-center">LEO KNUDSEN</h2>
				<h3 className="text-center">Full Stack Udvikler</h3>
				<h4 className="text-center"><span className="spacing"><a href="mailto:lkdevelop2200@gmail.com">lkdvelop2200@gmail.com</a></span> - <span className="spacing">+45 27 45 94 67</span></h4>
			</div>
		</div>
	);
}

export default MainBanner;