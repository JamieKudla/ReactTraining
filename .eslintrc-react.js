module.exports = {
	'parser': 'babel-eslint',

	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': 10, // overrides es6plus.js
		'ecmaFeatures': {
			'jsx': true,
		},
	},

	'env': {
		'browser': true,
	},

	'plugins': [
		'babel',
		'import',
		'react',
		'react-hooks',
	],

	'settings': {		
		'react': {
			'version': require('react/package.json').version, // 'detect' is not working, so using this until a fix is found
		},
	},

	'rules': {
		// js
		'quote-props': [2, 'consistent'],
		'arrow-parens': [2, 'always'],
		'no-confusing-arrow': ['error', { 'allowParens': true }],
		'no-console': [2, { 'allow': ['warn', 'error'] }],
		'no-extra-parens': 0,
		'camelcase': 0,
		'no-shadow': 0,
		'max-lines-per-function': 0,
		
		// react
		'react/display-name': 2,
		'react/no-children-prop': 2,
		'react/no-danger-with-children': 1,
		'react/no-deprecated': 2,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-render-return-value': 2,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 2,
		'react/prop-types': 2,
		'react/react-in-jsx-scope': 2,
		'react/require-render-return': 2,

		// hooks
		'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,

		// jsx
		'react/jsx-key': 1,
		'react/jsx-no-comment-textnodes': 1,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-target-blank': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
	}
};
