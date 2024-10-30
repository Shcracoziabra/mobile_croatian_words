import { StyleSheet } from 'react-native';

import { BaseColor } from '~/libs/enums/enums';

const BoxShadow = StyleSheet.create({
	boxShadow: {
		shadowColor: BaseColor.BLACK,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
});

export { BoxShadow };
