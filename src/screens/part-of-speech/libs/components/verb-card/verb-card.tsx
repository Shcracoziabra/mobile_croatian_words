import React from 'react';

import {
	View,
} from '~/libs/components/components';
import { globalStyles } from '~/libs/styles/styles';
import { type VerbDataItem } from '~/libs/types/types';

import {
	ExampleBlock,
	GrammarBlock,
	VerbPastChangesSection,
	VerbPresentChangesSection,
	WordBlock,
} from '../components';

type Properties = {
	data: VerbDataItem;
	onCollapsedSectionPress: () => void;
};

const VerbCard: React.FC<Properties> = ({ data, onCollapsedSectionPress }) => {
	const { exampleSentence, infinitive, pastTense, presentTense, ukrainianTranslation, ukrainianTranslationSentence } = data;

	return (
		<View style={[globalStyles.fullWidth, globalStyles.r16, globalStyles.boxShadow]}>
			<WordBlock translation={ukrainianTranslation} word={infinitive}/>
			<GrammarBlock onCollapsedSectionPress={onCollapsedSectionPress}>
				<VerbPresentChangesSection verbs={presentTense}/>
				<VerbPastChangesSection verbs={pastTense}/>
			</GrammarBlock>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={onCollapsedSectionPress}
			/>
		</View>
	);
};

export { VerbCard };

