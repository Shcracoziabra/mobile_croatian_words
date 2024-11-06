import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	View,
	Text,
	Pressable,
	TwoOptionsCard,
} from '~/libs/components/components';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { AnimatedGameField } from './libs/components/components';
import { styles } from './styles';

type CardContent = {
	answer: string;
	question: string;
};

type Properties = {
	gameCardData: CardContent[];
	onFinishPress: () => void;
};

const Game: React.FC<Properties> = ({ gameCardData, onFinishPress }) => {
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(
		NumericalValue.ZERO,
	);
	const [correctAnswers, setCorrectAnswers] = useState<number>(
		NumericalValue.ZERO,
	);

	const gameInProgress = currentCardIndex < gameCardData.length;
	const cardCount = `${currentCardIndex + NumericalValue.ONE} / ${gameCardData.length}`;

	const handleRightCardButtonPress = (): void => {
		setCurrentCardIndex(currentCardIndex + NumericalValue.ONE);
		setCorrectAnswers(correctAnswers + NumericalValue.ONE);
	};

	const handleWrongCardButtonPress = (): void => {
		setCurrentCardIndex(currentCardIndex + NumericalValue.ONE);
	};

	const handleRestartGameButtonPress = (): void => {
		setCurrentCardIndex(NumericalValue.ZERO);
		setCorrectAnswers(NumericalValue.ZERO);
	};

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper>
				{gameInProgress && (
					<Pressable onPress={onFinishPress} style={globalStyles.fullWidth}>
						{({ pressed }) => {
							const wrapperBackgroundColorStyle = pressed
								? globalStyles.brown
								: globalStyles.transparentGray;

							return (
								<View
									style={[
										globalStyles.p16,
										globalStyles.alignItemsCenter,
										wrapperBackgroundColorStyle,
									]}
								>
									<Text color={BaseColor.WHITE} weight='light'>
										Завершити гру
									</Text>
								</View>
							);
						}}
					</Pressable>
				)}
				<View
					style={[
						globalStyles.flex1,
						globalStyles.alignItemsCenter,
						globalStyles.p16,
					]}
				>
					{gameInProgress ? (
						<AnimatedGameField
							answer={gameCardData[currentCardIndex].answer}
							cardsLength={gameCardData.length}
							cardNumber={currentCardIndex + NumericalValue.ONE}
							onCardRightButtonPress={handleRightCardButtonPress}
							onCardWrongButtonPress={handleWrongCardButtonPress}
							question={gameCardData[currentCardIndex].question}
						/>
					) : (
						<View
							style={[
								globalStyles.fullWidth,
								globalStyles.flexGrow1,
								globalStyles.justifyContentCenter,
								globalStyles.alignItemsCenter,
							]}
						>
							<TwoOptionsCard
								addedStyles={styles.card}
								cardCount={cardCount}
								noButtonLabel='Завершити'
								onNoButtonPress={onFinishPress}
								onYesButtonPress={handleRestartGameButtonPress}
								yesButtonLabel='Грати ще раз'
							>
								<Text color={BaseColor.DARK_BROWN}>
									Правильних відповідей: {correctAnswers} /{' '}
									{gameCardData.length}
								</Text>
							</TwoOptionsCard>
						</View>
					)}
				</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Game };
