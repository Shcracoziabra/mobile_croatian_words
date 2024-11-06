import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	ScrollView,
	ToggleButton,
} from '~/libs/components/components';
import { BaseColor, NumericalValue, RootScreenName } from '~/libs/enums/enums';
import {
	useAppRoute,
	useEffect,
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
import { database } from '~/services/services';

const Tale: React.FC = () => {
	const [isVocabularyHidden, setIsVocabularyHidden] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [sentences, setSentences] = useState<{id: Number; hr: string; uk: string}[]>([]);
	const [words, setWords] = useState<{id:  number; hr: string; uk: string}[]>([]);

	const { params } = useAppRoute<typeof RootScreenName.TALE>();
	const { taleIndex, imageSource, titleHr } = params;

	useEffect(() => {
		const handleContentLoading = async(): Promise<void> => {
			const sentencesQueryResult = await database.getSentences(taleIndex);
			const wordsQueryResult = await database.getStoryWords(taleIndex);
			if(sentencesQueryResult){
				setSentences(sentencesQueryResult);
			}
			if(wordsQueryResult){
				setWords(wordsQueryResult);
			}
			setIsLoading(false);
		};
		handleContentLoading();
	},[taleIndex]);

	const taleSentenceCards = sentences.map(({ id, uk, hr }) => {
		return <TaleSentence key={id.toString()} sentence={hr} translation={uk} />;
	});

	const vocabularyCards = words.map(({ id, uk, hr }) => {
		return <VocabularyCard key={id.toString()} word={hr} translation={uk} />;
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
			<ScreenWrapper isLoading={isLoading} style={topPaddingStyle}>
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
