const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/index.jsx',

	devtool: 'source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		// create new html file with bundle
		new HtmlWebpackPlugin(
			{
				template: 'public/index.html',
			},
		),

		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),
	],
};
