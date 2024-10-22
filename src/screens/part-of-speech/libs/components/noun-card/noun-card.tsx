import React from 'react';

import {
	Text,
	View,
} from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';
import { type NounDataItem } from '~/libs/types/types';

import {
	ExampleBlock,
	WordBlock,
} from '../components';

type Properties = {
	data: NounDataItem;
	onCollapsedSectionPress: () => void;
};

const NounCard: React.FC<Properties> = ({ data, onCollapsedSectionPress }) => {
	const {
		exampleSentence,
    plural,
    singular,
    ukrainianTranslation,
    ukrainianTranslationSentence,
	} = data;

	return (
		<View style={[globalStyles.fullWidth, globalStyles.r16, globalStyles.boxShadow]}>
			<WordBlock translation={ukrainianTranslation} word={singular}/>
			<View style={[globalStyles.flexDirectionRow, globalStyles.justifyContentSpaceBetween, globalStyles.lightGray, globalStyles.p16, globalStyles.boxShadow]}>
				<Text color={BaseColor.ORANGE} weight='bold'>Множина</Text>
				<Text color={BaseColor.DARK_BROWN} weight='bold'>{plural}</Text>
			</View>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={onCollapsedSectionPress}
			/>
		</View>
	);
};

export { NounCard };

