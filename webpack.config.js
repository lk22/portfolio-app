var webpack = require('webpack');

module.exports = {
	 entry: [
	    'script!jquery/dist/jquery.min.js',
	    'script!foundation-sites/dist/js/foundation.min.js',
	    './app/resources/assets/js/app.jsx'
	],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			// root components
			Main: 'app/resources/assets/js/components/Main.jsx',
			About: 'app/resources/assets/js/components/About.jsx',
			Header: 'app/resources/assets/js/components/Header.jsx',
			Projects: 'app/resources/assets/js/components/Projects.jsx',

			// section component => (child components)
			MainBanner: 'app/resources/assets/js/components/sections/MainBanner.jsx',

				// profile components
				ProfileImgSection: 'app/resources/assets/js/components/profile/ProfileImgSection.jsx',
				ContactInformationSection: 'app/resources/assets/js/components/profile/ContactInformationSection.jsx',
				Resume: 'app/resources/assets/js/components/profile/Resume.jsx',
				ResumeTabHeader: 'app/resources/assets/js/components/profile/ResumeTabHeader.jsx',
				ResumeTabContentSection: 'app/resources/assets/js/components/profile/ResumeTabContentSection.jsx',

				// projects components
				ProjectsGallery: 'app/resources/assets/js/components/projects/ProjectsGallery.jsx',
				Project: 'app/resources/assets/js/components/projects/Project.jsx',
				ProjectHeader: 'app/resources/assets/js/components/projects/ProjectHeader.jsx',

			// redux related files
			actions: 'app/resources/assets/js/actions/actions.jsx',
			reducers: 'app/resources/assets/js/reducers/reducers.jsx',
			store: 	  'app/resources/assets/js/store/storeConfig.jsx',
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}