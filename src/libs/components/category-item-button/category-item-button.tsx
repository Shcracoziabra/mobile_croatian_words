import React from 'react';

import { LinearGradient, Pressable, Text } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	label: string;
	onPress: () => void;
};

const CategoryItemButton: React.FC<Properties> = ({ label, onPress }) => {
	const { end, start } = directionToGradient.leftToRight;

	return (
		<Pressable
			onPress={onPress}
			style={[globalStyles.flexDirectionRow, globalStyles.r16]}
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
							globalStyles.alignItemsCenter,
							globalStyles.flexGrow1,
							globalStyles.flexDirectionRow,
							globalStyles.gap8,
							globalStyles.justifyContentCenter,
							globalStyles.r16,
							globalStyles.p16,
						]}
					>
						<Text color={labelColor} preset="uppercase">
							{label}
						</Text>
					</LinearGradient>
				);
			}}
		</Pressable>
	);
};

export { CategoryItemButton };
