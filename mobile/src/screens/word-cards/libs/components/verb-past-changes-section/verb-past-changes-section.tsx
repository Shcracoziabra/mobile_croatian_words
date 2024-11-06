import React from 'react';

import { Text, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';

import { Gender } from '../../constants/constants';

type Properties = {
	verbs: string;
};

const VerbPastChangesSection: React.FC<Properties> = ({ verbs }) => {
	return (
		<View
			style={[
				globalStyles.flex1,
				globalStyles.gap12,
				globalStyles.pb16,
				globalStyles.ph16,
			]}
		>
			<Text color={BaseColor.ORANGE}>Минулий час</Text>
			{verbs.split(', ').map((verb, index) => {
				return (
					<Text color={BaseColor.DARK_BROWN} key={index}>
						{Gender[index]} {verb}
					</Text>
				);
			})}
		</View>
	);
};

export { VerbPastChangesSection };
