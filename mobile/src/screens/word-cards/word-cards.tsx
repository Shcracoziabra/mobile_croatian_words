import React from 'react';

import {
	Game,
	Icon,
	Pressable,
	ScreenWrapper,
	ScrollView,
	Text,
	View,
} from '~/libs/components/components';
import { BaseColor, CategoryEnglish, RootScreenName } from '~/libs/enums/enums';
import {
	useAppRoute,
	useEffect,
	useHeaderHeight,
	useNavigation,
	useRef,
	useState,
} from '~/libs/hooks/hooks';
import { categoryToTableName } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';
import {
	AdjectiveDataItem,
	NativeStackNavigationProp,
	NounDataItem,
	PartOfSpeechName,
	RootNavigationParameterList,
	VerbDataItem,
} from '~/libs/types/types';

import {
	AdjectiveCard,
	NounCard,
	VerbCard,
} from './libs/components/components';
import { getGameData } from './libs/helpers/helpers';
import { database } from '~/services/services';

type WordsDataItem = AdjectiveDataItem | NounDataItem | VerbDataItem;

const WordCards: React.FC = () => {
	const [gameHidden, setGameHidden] = useState<boolean>(true);
	const [wordsData, setWordsData] = useState<WordsDataItem[]>([]);

	const { params } = useAppRoute<typeof RootScreenName.WORD_CARDS>();
	const { contentLength, startIndex, partOfSpeechName } = params;

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	useEffect(() => {
		navigation.setOptions({
			headerShown: gameHidden,
		});
	}, [gameHidden, navigation]);

	useEffect(() => {
		const handleWordsLoading = async (): Promise<void> => {
			const tableName = categoryToTableName[partOfSpeechName];
			const words = await database.getTableEntriesWithOffsetAndLimit<WordsDataItem>({ tableName, offset: startIndex, limit: contentLength });
			words && setWordsData(words);
		};
		handleWordsLoading();
	},[partOfSpeechName, contentLength, startIndex]);

	const gameData = getGameData(wordsData, partOfSpeechName);

	const ref = useRef<ScrollView>(null);

	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const handleScrollToCardYOnExpanded = (y: number): void => ref.current?.scrollTo({ y });

	const handleStartGamePress = () => {
		setGameHidden(false);
	};

	const handleFinishGamePress = () => {
		setGameHidden(true);
	};

	const getWordCards = (screen: PartOfSpeechName): React.ReactNode => {
		switch (screen) {
			case CategoryEnglish.ADJECTIVE: {
				return (
					<>
						{(wordsData as AdjectiveDataItem[]).map((adjectiveData, index) => {
							return (
								<AdjectiveCard
									data={adjectiveData}
									key={index}
									onCardExpanded={handleScrollToCardYOnExpanded}
								/>
							);
						})}
					</>
				);
			}

			case CategoryEnglish.NOUN: {
				return (
					<>
						{(wordsData as NounDataItem[]).map((nounData, index) => {
							return (
								<NounCard
									data={nounData}
									key={index}
									onCardExpanded={handleScrollToCardYOnExpanded}
								/>
							);
						})}
					</>
				);
			}

			case CategoryEnglish.VERB: {
				return (
					<>
						{(wordsData as VerbDataItem[]).map((verbData, index) => {
							return (
								<VerbCard
									data={verbData}
									key={index}
									onCardExpanded={handleScrollToCardYOnExpanded}
								/>
							);
						})}
					</>
				);
			}
		}
	};

	return (
		<>
			{gameHidden ? (
				<ScreenWrapper style={[globalStyles.green, topPaddingStyle]}>
					<ScrollView
						ref={ref}
						contentContainerStyle={[
							globalStyles.gap24,
							globalStyles.flexGrow1,
							globalStyles.alignItemsCenter,
							globalStyles.p16,
						]}
					>
						{getWordCards(partOfSpeechName)}
					</ScrollView>
					<Pressable onPress={handleStartGamePress}>
						{({ pressed }) => {
							const wrapperBackgroundColorStyle = pressed
								? globalStyles.brown
								: globalStyles.transparentGray;
							return (
								<View
									style={[
										globalStyles.flexDirectionRow,
										globalStyles.justifyContentEnd,
										globalStyles.alignItemsCenter,
										globalStyles.gap16,
										globalStyles.ph16,
										globalStyles.pv12,
										wrapperBackgroundColorStyle,
									]}
								>
									<Text color={BaseColor.WHITE}>Почати гру</Text>
									<Icon
										color={BaseColor.WHITE}
										name='play-circle-outline'
										size={30}
									/>
								</View>
							);
						}}
					</Pressable>
				</ScreenWrapper>
			) : (
				<Game gameCardData={gameData} onFinishPress={handleFinishGamePress} />
			)}
		</>
	);
};

export { WordCards };
