import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		height: 150,
	},
	cardCount: {
		top: 16,
		left: 16,
		position: 'absolute',
	},
	flippedCard: {
		backfaceVisibility: 'hidden',
	},
	regularCard: {
		position: 'absolute',
	},
});

export { styles };
