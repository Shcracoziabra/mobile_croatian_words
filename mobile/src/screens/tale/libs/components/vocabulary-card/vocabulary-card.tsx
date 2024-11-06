import React from 'react';

import { View, Text, LinearGradient } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	translation: string;
	word: string;
};

const VocabularyCard: React.FC<Properties> = ({ translation, word }) => {
	const { start, end } = directionToGradient.leftToRight;

	return (
		<View style={[globalStyles.fullWidth]}>
			<LinearGradient
				colors={[...GradientColor.GREEN_ORANGE]}
				end={end}
				start={start}
				style={[globalStyles.rt16, globalStyles.p12, globalStyles.lightGray]}
			>
				<Text color={BaseColor.DARK_BROWN} weight='bold'>
					{word}
				</Text>
			</LinearGradient>
			<View
				style={[
					globalStyles.rb16,
					globalStyles.p12,
					globalStyles.transparentGray,
				]}
			>
				<Text color={BaseColor.WHITE} weight='bold'>
					{translation}
				</Text>
			</View>
		</View>
	);
};

export { VocabularyCard };
