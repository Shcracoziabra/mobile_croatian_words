import React from 'react';

import { Text, View } from '~/libs/components/components';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { type NounDataItem } from '~/libs/types/types';

import { ExampleBlock, WordBlock } from '../../components/components';
import { LayoutChangeEvent } from 'react-native';

type Properties = {
	data: NounDataItem;
	onCardExpanded: (yCoordinateToScroll: number) => void;
};

const NounCard: React.FC<Properties> = ({ data, onCardExpanded }) => {
	const {
		exampleSentence,
		plural,
		singular,
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
			<WordBlock translation={ukrainianTranslation} word={singular} />
			<View
				style={[
					globalStyles.flexDirectionRow,
					globalStyles.justifyContentSpaceBetween,
					globalStyles.lightGray,
					globalStyles.p16,
				]}
			>
				<Text color={BaseColor.ORANGE} weight='bold'>
					Множина
				</Text>
				<Text color={BaseColor.DARK_BROWN} weight='bold'>
					{plural}
				</Text>
			</View>
			<ExampleBlock
				example={exampleSentence}
				translation={ukrainianTranslationSentence}
				onCollapsedSectionPress={()=>{}}
			/>
		</View>
	);
};

export { NounCard };
