import React from 'react';

import { Text, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';

import { Person } from '../../constants/constants';

type Properties = {
	verbs: [string, string, string, string, string, string];
};

const VerbPresentChangesSection: React.FC<Properties> = ({ verbs }) => {
	return (
		<View style={[globalStyles.flex1, globalStyles.gap12, globalStyles.p16]}>
			<Text color={BaseColor.ORANGE}>Змінювання за особами</Text>
			{verbs.map((verb, index) => {
				return (
					<Text color={BaseColor.DARK_BROWN} key={index}>
						{Person[index]} {verb}
					</Text>
				);
			})}
		</View>
	);
};

export { VerbPresentChangesSection };
