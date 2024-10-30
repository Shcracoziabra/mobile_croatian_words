import { StyleSheet } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';

const BackgroundColor = StyleSheet.create({
	brown: {
		backgroundColor: BaseColor.BROWN,
	},
	gray: {
		backgroundColor: BaseColor.GRAY,
	},
	green: {
		backgroundColor: BaseColor.GREEN,
	},
	lightGray: {
		backgroundColor: BaseColor.LIGHT_GRAY,
	},
	lightOrange: {
		backgroundColor: BaseColor.LIGHT_ORANGE,
	},
	transparentBrown: {
		backgroundColor: BaseColor.TRANSPARENT_BROWN,
	},
	transparentGray: {
		backgroundColor: BaseColor.TRANSPARENT_GRAY,
	},
	transparentGreen: {
		backgroundColor: BaseColor.TRANSPARENT_GREEN,
	},
	white: {
		backgroundColor: BaseColor.WHITE,
	},
});

export { BackgroundColor };
