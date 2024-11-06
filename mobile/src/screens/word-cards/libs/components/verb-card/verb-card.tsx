import React from 'react';

import { View } from '~/libs/components/components';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { type VerbDataItem } from '~/libs/types/types';

import {
	ExampleBlock,
	GrammarBlock,
	VerbPastChangesSection,
	VerbPresentChangesSection,
	WordBlock,
} from '../../components/components';
import { LayoutChangeEvent } from 'react-native';
import { NumericalValue } from '~/libs/enums/enums';

type Properties = {
	data: VerbDataItem;
	onCardExpanded: (yCoordinateToScroll: number) => void;
};

const VerbCard: React.FC<Properties> = ({ data, onCardExpanded }) => {
	const {
		exampleSentence,
		infinitive,
		pastTense,
		presentTense,
		ukrainianTranslation,
		ukrainianTranslationSentence,
	} = data;

	const [currentCardHeight, setCurrentCardHeight] = useState<number|null>(null);

	return (
		<View
			onLayout={(event: LayoutChangeEvent)=> {
				const { height: nextHeight, y } = event.nativeEvent.layout;
				if(currentCardHeight && nextHeight > currentCardHeight + NumericalValue.ONE) {
					onCardExpanded(y);
				}
				setCurrentCardHeight(nextHeight);
			}}
			style={[globalStyles.fullWidth, globalStyles.r16, globalStyles.boxShadow]}
		>
			<WordBlock translation={ukrainianTranslation} word={infinitive} />
			<GrammarBlock onCollapsedSectionPress={()=>{}}>
				<VerbPresentChangesSection verbs={presentTense} />
				<VerbPastChangesSection verbs={pastTense} />
			</GrammarBlock>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={()=>{}}
			/>
		</View>
	);
};

export { VerbCard };
