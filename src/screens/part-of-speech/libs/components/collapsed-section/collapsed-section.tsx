import React from 'react';
import {
	LinearGradient,
	Text,
} from '~/libs/components/components';
import { Icon } from '~/libs/components/icon/icon';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	label: string;
	rounded?: boolean;
}

const CollapsedSection: React.FC<Properties> = ({ label, rounded }) => {

	const { end, start } = directionToGradient.leftToRight;

	return (
		<LinearGradient
			colors={[...GradientColor.GREEN_ORANGE]}
			end={end}
			start={start}
			style={[
				globalStyles.alignItemsCenter,
				globalStyles.flexGrow1,
				globalStyles.flexDirectionRow,
				globalStyles.gap8,
				globalStyles.justifyContentEnd,
				globalStyles.p12,
				rounded && globalStyles.rb16,
			]}
		>
			<Text
				color={BaseColor.WHITE}
			>
				{label}
			</Text>
			<Icon color={BaseColor.GREEN} name='arrow-drop-down' size={24}/>
		</LinearGradient>
	);
};

export { CollapsedSection };
