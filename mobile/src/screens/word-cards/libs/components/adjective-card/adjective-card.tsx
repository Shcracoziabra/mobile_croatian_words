import React from 'react';

import { View } from '~/libs/components/components';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { type AdjectiveDataItem } from '~/libs/types/types';

import {
	AdjectiveGendersSection,
	ExampleBlock,
	GrammarBlock,
	WordBlock,
} from '../../components/components';
import { LayoutChangeEvent } from 'react-native';
import { NumericalValue } from '~/libs/enums/enums';

type Properties = {
	data: AdjectiveDataItem;
	onCardExpanded: (yCoordinateToScroll: number) => void;
};

const AdjectiveCard: React.FC<Properties> = ({
	data,
	onCardExpanded,
}) => {
	const {
		exampleSentence,
		feminine,
		maskuline,
		neutrum,
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
			<WordBlock translation={ukrainianTranslation} word={maskuline} />
			<GrammarBlock onCollapsedSectionPress={()=>{}}>
				<AdjectiveGendersSection adjectives={[maskuline, feminine, neutrum]} />
			</GrammarBlock>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={()=>{}}
			/>
		</View>
	);
};

export { AdjectiveCard };
