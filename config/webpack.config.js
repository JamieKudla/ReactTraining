const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/index.jsx',

	devServer: {
		port: 8080,
	},

	devtool: 'source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},

	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
					'stylelint-custom-processor-loader',
				],
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

		// Linter for styled-components
		new StyleLintPlugin({}),

		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),
	],

	performance: {
		hints: false,
	},
};
