import React from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { View } from '~/libs/components/components';
import { useEffect, useNavigation } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { GameCard, ShowAnswerButton } from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationParameterList } from '~/libs/types/types';

type Properties = {
	answer: string;
	cardsLength: number;
	cardNumber: number;
	onCardRightButtonPress: () => void;
	onCardWrongButtonPress: () => void;
	question: string;
};

const AnimatedGameField: React.FC<Properties> = ({
	answer,
	cardNumber,
	cardsLength,
	onCardRightButtonPress,
	onCardWrongButtonPress,
	question,
}) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	const isFlipped = useSharedValue<boolean>(false);
	const cardCount = cardNumber + ' / ' + cardsLength;

	React.useEffect(
		() =>
			navigation.addListener('beforeRemove', (e) => {
				e.preventDefault();
			}),
		[navigation],
	);

	useEffect(() => {
		isFlipped.value = false;
	}, [cardNumber, isFlipped]);

	const handleShowAnswerButtonPress = () => {
		isFlipped.value = true;
	};

	return (
		<View
			style={[
				globalStyles.fullWidth,
				globalStyles.flex1,
				globalStyles.gap24,
				globalStyles.justifyContentCenter,
			]}
		>
			<GameCard
				answerContent={answer}
				cardCount={cardCount}
				isFlipped={isFlipped}
				onCardRightButtonPress={onCardRightButtonPress}
				onCardWrongButtonPress={onCardWrongButtonPress}
				questionContent={question}
			/>
			<ShowAnswerButton
				isFlipped={isFlipped}
				onPress={handleShowAnswerButtonPress}
			/>
		</View>
	);
};

export { AnimatedGameField };
