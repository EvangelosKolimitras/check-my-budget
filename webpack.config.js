const path = require( 'path' )
const HTMLWebpackPlugin = require('html-webpack-plugin')

const MDA = {
	_ENV : 'development',
	_PUBLIC_ROOT : path.join(__dirname,"public"),
	_PORT : process.env.PORT || 9999,
	_ENTRIES : [
		'./src/js/app.js'
	]
}

module.exports = {

	// Entry point for starting the application
	entry  : [...MDA._ENTRIES] ,

	// Output to the public folder
	output : {
		path     : MDA._PUBLIC_ROOT ,
		filename : './src/bundle.js'
	} ,

	// Modules
	module : {
		rules : [

			// Babel loader
			{
				loader  : 'babel-loader' ,
				test    : /\.js$/ ,
				exclude : /node_modules/
			},

			// scss loader
			{
				test: /\.(c|sc|sa)ss$/,
				use : [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},

	// Plugins
	plugins: [

		// html plugin
		new HTMLWebpackPlugin({
			template: "src/index.ejs",
			filename:"index.html"
		})
	],

	// Server
	devServer: {
		contentBase: MDA._PUBLIC_ROOT,
		port : MDA._PORT,
		hot: true,
		historyApiFallback: true
	},

	// Mode
	mode : MDA._ENV,

	// Dev
	devtool: "cheap-module-eval-source-map"
}
