import { type FlexStyle } from 'react-native';

type GlobalFlexStyles = {
	[key: string]: FlexStyle;
};

const Flex = {
	alignItemsCenter: {
		alignItems: 'center',
	},
	alignItemsEnd: {
		alignItems: 'flex-end',
	},
	alignItemsStart: {
		alignItems: 'flex-start',
	},
	flex1: {
		flex: 1,
	},
	flexDirectionColumn: {
		flexDirection: 'column',
	},
	flexDirectionRow: {
		flexDirection: 'row',
	},
	flexGrow1: {
		flexGrow: 1,
	},
	justifyContentCenter: {
		justifyContent: 'center',
	},
	justifyContentEnd: {
		justifyContent: 'flex-end',
	},
	justifyContentSpaceBetween: {
		justifyContent: 'space-between',
	},
	justifyContentStart: {
		justifyContent: 'flex-start',
	},
	wrap: {
		flexWrap: 'wrap',
	},
} satisfies GlobalFlexStyles;

export { Flex };
