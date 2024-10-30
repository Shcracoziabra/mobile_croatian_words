import React from 'react';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { Pressable, Text, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';
import { SharedValue } from '~/libs/types/types';

type Properties = {
	isFlipped: SharedValue<boolean>;
	onPress: () => void;
};

const ShowAnswerButton: React.FC<Properties> = ({ isFlipped, onPress }) => {
	const buttonAnimatedStyle = useAnimatedStyle(() => {
		const opacityValue = withTiming(Number(!isFlipped.value));
		return {
			opacity: opacityValue,
		};
	});

	return (
		<Animated.View style={[buttonAnimatedStyle, globalStyles.boxShadow]}>
			<Pressable onPress={onPress}>
				{({ pressed }) => {
					const wrapperBackgroundColorStyle = pressed
						? globalStyles.green
						: globalStyles.transparentGray;

					return (
						<View
							style={[
								globalStyles.flexGrow1,
								globalStyles.alignItemsCenter,
								globalStyles.p16,
								globalStyles.r16,
								wrapperBackgroundColorStyle,
							]}
						>
							<Text color={BaseColor.WHITE}>Show answer</Text>
						</View>
					);
				}}
			</Pressable>
		</Animated.View>
	);
};

export { ShowAnswerButton };
