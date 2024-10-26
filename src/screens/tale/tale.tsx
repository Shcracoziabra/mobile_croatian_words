import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	ScrollView,
	ToggleButton,
} from '~/libs/components/components';
import { mockTalesData } from '~/libs/constants/constants';
import { BaseColor, NumericalValue, RootScreenName } from '~/libs/enums/enums';
import {
	useAppRoute,
	useHeaderHeight,
	useRef,
	useState,
} from '~/libs/hooks/hooks';
import {
	Illustration,
	TaleHeader,
	TaleSentence,
	VocabularyCard,
} from './libs/components/components';

import { globalStyles } from '~/libs/styles/styles';

const Tale: React.FC = () => {
	const [isVocabularyHidden, setIsVocabularyHidden] = useState<boolean>(true);

	const { params } = useAppRoute<typeof RootScreenName.TALE>();

	const { taleIndex, imageSource } = params;
	const { titleHr, text, vocabulary } = mockTalesData[taleIndex];

	const taleSentenceCards = text.map(({ uk, hr }, index) => {
		return <TaleSentence key={index} sentence={hr} translation={uk} />;
	});

	const vocabularyCards = vocabulary.map(({ uk, hr }, index) => {
		return <VocabularyCard key={index} word={hr} translation={uk} />;
	});

	const ref = useRef<ScrollView>(null);

	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const handleToggleVocabularyHidden = () => {
		setIsVocabularyHidden(!isVocabularyHidden);
		ref.current?.scrollTo({ y: NumericalValue.ZERO, animated: false });
	};

	const filterColor = isVocabularyHidden
		? BaseColor.GREEN
		: BaseColor.TRANSPARENT_BROWN;

	return (
		<BackgroundWrapper imageSource={imageSource} filterColor={filterColor}>
			<ScreenWrapper style={[topPaddingStyle]}>
				<TaleHeader title={titleHr} />
				<ToggleButton
					colors={[BaseColor.LIGHT_ORANGE, BaseColor.GREEN]}
					labels={['Текст', 'Словник']}
					isLeftPartActive={isVocabularyHidden}
					onToggleFunction={handleToggleVocabularyHidden}
				/>
				<ScrollView
					ref={ref}
					contentContainerStyle={[
						globalStyles.gap24,
						globalStyles.flexGrow1,
						globalStyles.alignItemsCenter,
						globalStyles.p16,
					]}
				>
					{isVocabularyHidden && <Illustration imageSource={imageSource} />}
					{isVocabularyHidden ? taleSentenceCards : vocabularyCards}
				</ScrollView>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Tale };
