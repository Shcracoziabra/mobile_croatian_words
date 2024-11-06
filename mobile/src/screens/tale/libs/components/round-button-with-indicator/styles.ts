import { StyleSheet } from 'react-native';
import { BaseColor } from '~/libs/enums/enums';

const styles = StyleSheet.create({
	active: {
		backgroundColor: BaseColor.SALAD_GREEN,
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
		height: 20,
		width: 20,
		borderRadius: 10,
	},
});

export { styles };
