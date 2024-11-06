import React from 'react';

import { LinearGradient, Text } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';

import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	title: string;
};

const TaleHeader: React.FC<Properties> = ({ title }) => {
	const { start, end } = directionToGradient.leftToRight;

	return (
		<LinearGradient
			colors={[...GradientColor.GREEN_ORANGE]}
			end={end}
			start={start}
			style={[
				globalStyles.justifyContentCenter,
				globalStyles.alignItemsCenter,
				globalStyles.p12,
				globalStyles.green,
			]}
		>
			<Text color={BaseColor.WHITE} preset='uppercase'>
				{title}
			</Text>
		</LinearGradient>
	);
};

export { TaleHeader };
