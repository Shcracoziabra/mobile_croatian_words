module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'~': './src',
				},
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
			},
		],
	],
	presets: ['module:@react-native/babel-preset'],
};
