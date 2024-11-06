import React from 'react';

import {
	Image,
	LinearGradient,
	Pressable,
	Text,
	View,
} from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';
import { ImageSourcePropType } from '~/libs/types/types';

import { styles } from './styles';

type Properties = {
	title: string;
	imageSource?: ImageSourcePropType;
	onPress: () => void;
};

const defaultImageSource =
	require('~/assets/backgrounds/main-bg.png') as ImageSourcePropType;

const TaleListItem: React.FC<Properties> = ({
	title,
	imageSource = defaultImageSource,
	onPress,
}) => {
	const { start, end } = directionToGradient.leftToRight;

	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => {
				const buttonColors = pressed
					? [...GradientColor.GREEN_ORANGE]
					: [BaseColor.TRANSPARENT_GRAY, BaseColor.WHITE];

				const labelColor = pressed ? BaseColor.WHITE : BaseColor.DARK_BROWN;

				return (
					<View
						style={[
							globalStyles.flex1,
							globalStyles.fullWidth,
							globalStyles.r16,
							styles.container,
						]}
					>
						<View
						style={[
							globalStyles.flex1,
							globalStyles.rt16,
							globalStyles.pt24,
							globalStyles.ph24,
							globalStyles.transparentGray,
						]}
					>
						<Image
							resizeMode='cover'
							source={imageSource}
							style={[styles.absoluteCover, globalStyles.rt16]}
						/>
					</View>
						<LinearGradient
							colors={[...buttonColors]}
							end={end}
							start={start}
							style={[
								globalStyles.justifyContentEnd,
								globalStyles.p8,
								globalStyles.rb16,
							]}
						>
							<Text color={labelColor}>{title}</Text>
						</LinearGradient>
					</View>
				);
			}}
		</Pressable>
	);
};

export { TaleListItem };
