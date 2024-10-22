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
		'react-native-reanimated/plugin',
	],
	presets: ['module:@react-native/babel-preset'],
};
