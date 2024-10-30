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
import {
	mockAdjectiveData,
	mockNounData,
	mockVerbData,
} from '~/libs/constants/constants';
import { BaseColor, CategoryEnglish, RootScreenName } from '~/libs/enums/enums';
import {
	useAppRoute,
	useEffect,
	useHeaderHeight,
	useNavigation,
	useRef,
	useState,
} from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import {
	NativeStackNavigationProp,
	PartOfSpeechName,
	RootNavigationParameterList,
} from '~/libs/types/types';

import {
	AdjectiveCard,
	NounCard,
	VerbCard,
} from './libs/components/components';
import { getGameData } from './libs/helpers/helpers';

const WordCards: React.FC = () => {
	const [gameHidden, setGameHidden] = useState<boolean>(true);

	const { params } = useAppRoute<typeof RootScreenName.WORD_CARDS>();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();

	useEffect(() => {
		navigation.setOptions({
			headerShown: gameHidden,
		});
	}, [gameHidden, navigation]);

	const { partOfSpeechName } = params;
	const gameData = getGameData(partOfSpeechName);

	const ref = useRef<ScrollView>(null);

	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const handleCollapsedSectionPress = (): void => ref.current?.scrollToEnd();

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
						{mockAdjectiveData.map((adjectiveData, index) => {
							return (
								<AdjectiveCard
									data={adjectiveData}
									key={index}
									onCollapsedSectionPress={handleCollapsedSectionPress}
								/>
							);
						})}
					</>
				);
			}

			case CategoryEnglish.NOUN: {
				return (
					<>
						{mockNounData.map((nounData, index) => {
							return (
								<NounCard
									data={nounData}
									key={index}
									onCollapsedSectionPress={handleCollapsedSectionPress}
								/>
							);
						})}
					</>
				);
			}

			case CategoryEnglish.VERB: {
				return (
					<>
						{mockVerbData.map((verbData, index) => {
							return (
								<VerbCard
									data={verbData}
									key={index}
									onCollapsedSectionPress={handleCollapsedSectionPress}
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
										name="play-circle-outline"
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
