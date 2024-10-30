import { StyleSheet } from 'react-native';
import { BaseColor } from '~/libs/enums/enums';

const styles = StyleSheet.create({
	active: {
		backgroundColor: BaseColor.ORANGE,
	},
	button: {
		height: 30,
		width: 30,
		borderRadius: 15,
	},
	inActive: {
		backgroundColor: BaseColor.GRAY,
	},
	indicator: {
		height: 14,
		width: 14,
		borderRadius: 7,
	},
});

export { styles };
