import React from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { BackgroundWrapper, ScreenWrapper, View, Text, Pressable, TwoOptionsCard } from '~/libs/components/components';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { GameCard, ShowAnswerButton } from '../components';
import { styles } from './styles';

type CardContent = {
	answer: string;
	question: string;
}

type Properties = {
	gameCardData: CardContent[];
	onFinishPress: () => void;
}

const Game: React.FC<Properties> = ({ gameCardData, onFinishPress }) => {
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(NumericalValue.ZERO);
	const [correctAnswers, setCorrectAnswers] = useState<number>(NumericalValue.ZERO);

	const isFlipped = useSharedValue<boolean>(false);
	const gameInProgress = currentCardIndex < gameCardData.length;
	const cardCount = `${currentCardIndex + NumericalValue.ONE} / ${gameCardData.length}`;

  const handleShowAnswerButtonPress = () => {
    isFlipped.value = true;
  };

	const handleRightCardButtonPress = ():void => {
		isFlipped.value = false;
		setCurrentCardIndex(currentCardIndex + NumericalValue.ONE);
		setCorrectAnswers(correctAnswers + NumericalValue.ONE);
	};

	const handleWrongCardButtonPress = ():void => {
		isFlipped.value = false;
		setCurrentCardIndex(currentCardIndex + NumericalValue.ONE);
	};

	const handleRestartGameButtonPress = ():void => {
		setCurrentCardIndex(NumericalValue.ZERO);
		setCorrectAnswers(NumericalValue.ZERO);
	};

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper>
			<View style={[globalStyles.flex1, globalStyles.gap48, globalStyles.alignItemsCenter, globalStyles.justifyContentCenter, globalStyles.p16]}>
				{
					gameInProgress ?	(
						<View style={[
							globalStyles.flexDirectionRow,
							globalStyles.flex1,
							globalStyles.wrap,
							globalStyles.gap8,
							globalStyles.justifyContentCenter,
							globalStyles.alignItemsCenter,
						]}>
							<View style={[globalStyles.flexDirectionRow, globalStyles.fullWidth, globalStyles.justifyContentEnd, globalStyles.mb48]}>
								<Pressable onPress={onFinishPress}>
									{({ pressed }) => {
										const wrapperBackgroundColorStyle = pressed ? globalStyles.green : globalStyles.transparentGray;

										return (
											<View style={[globalStyles.p16, globalStyles.r16, wrapperBackgroundColorStyle]}>
												<Text color={BaseColor.WHITE}>Завершити</Text>
											</View>
										);
									}}
								</Pressable>
							</View>
							<View style={[globalStyles.flex1, globalStyles.gap24]}>
								<GameCard
								answerContent={gameCardData[currentCardIndex].answer}
								cardCount={cardCount}
								isFlipped={isFlipped}
								onCardRightButtonPress={handleRightCardButtonPress}
								onCardWrongButtonPress={handleWrongCardButtonPress}
								questionContent={gameCardData[currentCardIndex].question}
								/>
								<ShowAnswerButton isFlipped={isFlipped} onPress={handleShowAnswerButtonPress}/>
							</View>
						</View>
					) : (
						<View style={[globalStyles.flex1, globalStyles.flexDirectionRow]}>
							<TwoOptionsCard
								addedStyles={styles.finishCard}
								cardCount={cardCount}
								noButtonLabel='Завершити'
								onNoButtonPress={onFinishPress}
								onYesButtonPress={handleRestartGameButtonPress}
								yesButtonLabel='Грати ще раз'
							>
								<Text color={BaseColor.DARK_BROWN}>Правильних відповідей: {correctAnswers}</Text>
							</TwoOptionsCard>
						</View>
					)
				}
			</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Game };
