import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient, Text, TwoOptionsCard, View } from '~/libs/components/components';
import { BaseColor, GradientColor, NumericalValue } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';
import { SharedValue, ValueOf } from '~/libs/types/types';

import { AnimationSpeed, FlipDirection } from '../../enums/enums';

import { styles } from './styles';

type QuestionContentProperties =  {
	cardCount: string;
	content: string;
}

type GameCardProperties = {
	answerContent: string;
	cardCount: string;
  direction?: ValueOf<typeof FlipDirection>
  duration?: number;
	isFlipped: SharedValue<boolean>;
	onCardRightButtonPress: () => void;
	onCardWrongButtonPress: () => void;
	questionContent: string;
}

const QuestionContent: React.FC<QuestionContentProperties> = ({ cardCount, content }) => {
	const { end, start } = directionToGradient.leftToRight;
  return (
		<View style={[globalStyles.flexGrow1, globalStyles.fullWidth, styles.card]}>
			<LinearGradient
				colors={[...GradientColor.GREEN_ORANGE]}
				end={end}
				start={start}
				style={[
					globalStyles.alignItemsCenter,
					globalStyles.flex1,
					globalStyles.flexGrow1,
					globalStyles.flexDirectionRow,
					globalStyles.fullWidth,
					globalStyles.justifyContentCenter,
					globalStyles.r16,
				]}
			>
				<Text
					color={BaseColor.BROWN}
					style={styles.cardCount}
					>
					{cardCount}
				</Text>
				<View style={[globalStyles.fullWidth, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter]}>
					<Text
						color={BaseColor.WHITE}
						preset='uppercase'
						>
						{content}
					</Text>
				</View>
			</LinearGradient>
		</View>
  );
};

const GameCard: React.FC<GameCardProperties> = ({
	cardCount,
  isFlipped,
  direction = FlipDirection.VERTICAL,
  duration = AnimationSpeed.FAST,
	onCardRightButtonPress,
	onCardWrongButtonPress,
	questionContent,
	answerContent,
}) => {
  const isDirectionX = direction === FlipDirection.HORISONTAL;

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration: isFlipped.value ? duration : NumericalValue.ZERO });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
			zIndex: isFlipped.value ? 1 : 2,
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration: isFlipped.value ? duration : NumericalValue.ZERO });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
			zIndex: isFlipped.value ? 2 : 1,
    };
  });

  return (
    <View style={[globalStyles.fullWidth, globalStyles.r16]}>
      <Animated.View
        style={[
          styles.regularCard,
          regularCardAnimatedStyle,
					globalStyles.boxShadow,
        ]}>
        <QuestionContent cardCount={cardCount} content={questionContent}/>
      </Animated.View>
      <Animated.View
        style={[
          styles.flippedCard,
          flippedCardAnimatedStyle,
					globalStyles.boxShadow,
        ]}>
					<TwoOptionsCard
						addedStyles={styles.card}
						cardCount={cardCount}
						noButtonLabel='Неправильно'
						onNoButtonPress={onCardWrongButtonPress}
						onYesButtonPress={onCardRightButtonPress}
						yesButtonLabel='Правильно'
					>
						<Text
							color={BaseColor.BROWN}
							style={styles.cardCount}
							>
							{cardCount}
						</Text>
						<Text color={BaseColor.DARK_BROWN}>{answerContent}</Text>
					</TwoOptionsCard>
      </Animated.View>
    </View>
  );
};

export { GameCard };
