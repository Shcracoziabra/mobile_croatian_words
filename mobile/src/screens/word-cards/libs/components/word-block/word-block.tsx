import React from 'react';

import { LinearGradient, Text, View } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	translation: string;
	word: string;
};

const WordBlock: React.FC<Properties> = ({ translation, word }) => {
	const { end, start } = directionToGradient.leftToRight;

	return (
		<>
			<View style={globalStyles.rt16}>
				<LinearGradient
					colors={[...GradientColor.GREEN_ORANGE]}
					end={end}
					start={start}
					style={[
						globalStyles.alignItemsCenter,
						globalStyles.flex1,
						globalStyles.gap8,
						globalStyles.justifyContentCenter,
						globalStyles.rt16,
						globalStyles.p8,
					]}
				>
					<Text color={BaseColor.WHITE} preset='uppercase'>
						{translation}
					</Text>
				</LinearGradient>
			</View>
			<View style={[globalStyles.white, globalStyles.p16]}>
				<Text color={BaseColor.DARK_BROWN} preset='uppercase'>
					{word}
				</Text>
			</View>
		</>
	);
};

export { WordBlock };
