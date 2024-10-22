import React from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { BackgroundWrapper, ScreenWrapper, View, Text, Pressable, TwoOptionsCard } from '~/libs/components/components';
import { BaseColor, NumericalValue, RootScreenName } from '~/libs/enums/enums';
import { useNavigation, useAppRoute, useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { type RootNavigationParameterList, type NativeStackNavigationProp } from '~/libs/types/types';
import { GameCard, ShowAnswerButton } from './libs/components/components';
import { styles } from './styles';

const Game: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	const { params: gameCardData } = useAppRoute<RootNavigationParameterList, typeof RootScreenName.GAME>();
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

	const handleFinishGamePress = (): void => {
		navigation.goBack();
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
								<Pressable onPress={handleFinishGamePress}>
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
								addedStyles={styles.card}
								cardCount={cardCount}
								noButtonLabel='Завершити'
								onNoButtonPress={handleFinishGamePress}
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
