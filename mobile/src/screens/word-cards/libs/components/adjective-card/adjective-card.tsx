import React from 'react';

import { View } from '~/libs/components/components';
import { globalStyles } from '~/libs/styles/styles';
import { type AdjectiveDataItem } from '~/libs/types/types';

import {
	AdjectiveGendersSection,
	ExampleBlock,
	GrammarBlock,
	WordBlock,
} from '../../components/components';

type Properties = {
	data: AdjectiveDataItem;
	onCollapsedSectionPress: () => void;
};

const AdjectiveCard: React.FC<Properties> = ({
	data,
	onCollapsedSectionPress,
}) => {
	const {
		exampleSentence,
		feminine,
		maskuline,
		neutrum,
		ukrainianTranslation,
		ukrainianTranslationSentence,
	} = data;

	return (
		<View
			style={[globalStyles.fullWidth, globalStyles.r16, globalStyles.boxShadow]}
		>
			<WordBlock translation={ukrainianTranslation} word={maskuline} />
			<GrammarBlock onCollapsedSectionPress={onCollapsedSectionPress}>
				<AdjectiveGendersSection adjectives={[maskuline, feminine, neutrum]} />
			</GrammarBlock>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={onCollapsedSectionPress}
			/>
		</View>
	);
};

export { AdjectiveCard };
