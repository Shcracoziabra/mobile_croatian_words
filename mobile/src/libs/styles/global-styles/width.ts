import { type ViewStyle } from 'react-native';

type GlobalWidthStyles = {
	[key: string]: ViewStyle;
};

const Width = {
	fullWidth: {
		width: '100%',
	},
} satisfies GlobalWidthStyles;

export { Width };
