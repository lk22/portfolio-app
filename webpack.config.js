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

			// section component => (child components)
			MainBanner: 'app/resources/assets/js/components/sections/MainBanner.jsx',
				// profile components
				ProfileImgSection: 'app/resources/assets/js/components/profile/ProfileImgSection.jsx',
				ContactInformationSection: 'app/resources/assets/js/components/profile/ContactInformationSection.jsx',

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