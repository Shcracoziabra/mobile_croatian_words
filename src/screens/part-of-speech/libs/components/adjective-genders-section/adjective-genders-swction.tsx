import React from 'react';

import {
	Text,
	View,
} from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';

import { Gender } from '../../constants/constants';

type Properties = {
	adjectives: [string, string, string];
}

const AdjectiveGendersSection: React.FC<Properties> = ({ adjectives }) => {
	return (
		<View style={[
			globalStyles.flex1,
			globalStyles.gap12,
			globalStyles.pb16,
			globalStyles.ph16,
		]}>
			<Text
			color={BaseColor.ORANGE}
			>
				Змінювання за родами
			</Text>
			{adjectives.map((adjective, index) => {
				return (
					<Text
						color={BaseColor.DARK_BROWN}
						key={index}
					>
						{Gender[index]} {adjective}
				</Text>
				);
			})}
		</View>
	);
};

export { AdjectiveGendersSection };
