/* eslint-version 5.15 */

module.exports = {
	'root': true,
	'extends': [
		'eslint:recommended',
		'.eslintrc-base.js',
		'.eslintrc-es6plus.js',
		'.eslintrc-react.js',
	],
	'globals': {
    API_ROOT: false,
}
};
