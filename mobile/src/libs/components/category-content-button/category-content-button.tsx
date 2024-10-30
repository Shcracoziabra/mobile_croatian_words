import React from 'react';

import { LinearGradient, Pressable, Text } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';

import { styles } from './styles';

type Properties = {
	label: string;
	onPress: () => void;
};

const CategoryContentButton: React.FC<Properties> = ({ label, onPress }) => {
	const { end, start } = directionToGradient.leftToRight;

	return (
		<Pressable
			onPress={onPress}
			style={[globalStyles.flexDirectionRow, styles.button]}
		>
			{({ pressed }) => {
				const buttonColors = pressed
					? [...GradientColor.GREEN_ORANGE]
					: [BaseColor.TRANSPARENT_GRAY, BaseColor.WHITE];

				const labelColor = pressed ? BaseColor.WHITE : BaseColor.DARK_BROWN;

				return (
					<LinearGradient
						colors={[...buttonColors]}
						end={end}
						start={start}
						style={[
							globalStyles.flex1,
							globalStyles.alignItemsCenter,
							globalStyles.justifyContentCenter,
							globalStyles.p16,
							globalStyles.r16,
							styles.button,
						]}
					>
						<Text color={labelColor}>{label}</Text>
					</LinearGradient>
				);
			}}
		</Pressable>
	);
};

export { CategoryContentButton };
