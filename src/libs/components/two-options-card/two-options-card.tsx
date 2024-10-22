import React from 'react';

import { Pressable, Text, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';
import { type StyleProp, type ViewStyle } from '~/libs/types/types';

type Properties =  {
	addedStyles?: StyleProp<ViewStyle>;
	cardCount: string;
	children: React.ReactNode;
	noButtonLabel: string;
	onNoButtonPress: () => void;
	onYesButtonPress: () => void;
	yesButtonLabel: string;
}


const TwoOptionsCard: React.FC<Properties> = ({ addedStyles, children, noButtonLabel, onNoButtonPress, onYesButtonPress, yesButtonLabel }) => {
  return (
    <View style={[
			globalStyles.flexGrow1,
			globalStyles.fullWidth,
			globalStyles.r16,
			globalStyles.lightOrange,
			addedStyles,
		]}>
			<View style={[
			globalStyles.flexGrow1,
			globalStyles.alignItemsCenter,
			globalStyles.justifyContentCenter,
		]}>
			{children}
			</View>
			<View style={[globalStyles.flex1, globalStyles.flexGrow1, globalStyles.flexDirectionRow]}>
				<Pressable onPress={onNoButtonPress} style={globalStyles.flex1}>
					{
						({ pressed}) => {
							const wrongBackgroundColorStyle = pressed ? globalStyles.white : globalStyles.green;
							const textColor = pressed ? BaseColor.DARK_BROWN : BaseColor.WHITE;
							return (
								<View style={[
									globalStyles.flexGrow1,
									globalStyles.p16,
									globalStyles.rbl16,
									wrongBackgroundColorStyle,
									globalStyles.alignItemsCenter,
									globalStyles.justifyContentCenter,
								]}>
									<Text color={textColor}>{noButtonLabel}</Text>
								</View>
							);
						}
					}
				</Pressable>
				<Pressable onPress={onYesButtonPress} style={globalStyles.flex1}>
				{
						({ pressed}) => {
							const rightBackgroundColorStyle = pressed ? globalStyles.white : globalStyles.brown;
							const textColor = pressed ? BaseColor.DARK_BROWN : BaseColor.WHITE;
							return (
								<View style={[
									globalStyles.flexGrow1,
									globalStyles.p16,
									globalStyles.rbr16,
									rightBackgroundColorStyle,
									globalStyles.alignItemsCenter,
									globalStyles.justifyContentCenter,
								]}>
									<Text color={textColor}>{yesButtonLabel}</Text>
								</View>
							);
						}
					}
				</Pressable>
			</View>
    </View>
  );
};

export { TwoOptionsCard };
