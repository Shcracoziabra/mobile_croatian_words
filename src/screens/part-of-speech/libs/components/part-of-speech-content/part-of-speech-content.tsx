import React from 'react';

import { Icon, Pressable, ScreenWrapper, ScrollView, Text, View } from '~/libs/components/components';
import { mockAdjectiveData, mockNounData, mockVerbData } from '~/libs/constants/constants';
import { BaseColor, RootScreenName } from '~/libs/enums/enums';
import { useAppRoute, useRef, useState } from '~/libs/hooks/hooks';

import { globalStyles } from '~/libs/styles/styles';

import { AdjectiveCard, Game, NounCard, VerbCard } from '../components';

const PartOfSpeechContent: React.FC = () => {
	const { name  } = useAppRoute();
	const ref = useRef<ScrollView>(null);

	const [gameHidden, setGameHidden] = useState(true);

	const handleStartGamePress = (): void => {
		setGameHidden(false);
	};

	const handleFinishGamePress = (): void => {
		setGameHidden(true);
	};

	const handleCollapsedSectionPress = ():void => ref.current?.scrollToEnd();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case RootScreenName.ADJECTIVE_CONTENT: {
				return (
					<>
						{mockAdjectiveData.map((adjectiveData, index) => {
							return (
								<AdjectiveCard data={adjectiveData} key={index} onCollapsedSectionPress={handleCollapsedSectionPress}/>
							);
						})}
					</>
				);
			}

			case RootScreenName.NOUN_CONTENT: {
				return (
					<>
						{mockNounData.map((nounData, index) => {
							return (
								<NounCard data={nounData} key={index} onCollapsedSectionPress={handleCollapsedSectionPress}/>
							);
						})}
					</>
				);
			}

			case RootScreenName.VERB_CONTENT: {
				return (
					<>
						{mockVerbData.map((verbData, index) => {
							return (
								<VerbCard data={verbData} key={index} onCollapsedSectionPress={handleCollapsedSectionPress}/>
							);
						})}
					</>
				);
			}
		}

		return null;
	};

	const getGame = (screen: string): React.ReactNode => {
		switch (screen) {
			case RootScreenName.ADJECTIVE_CONTENT: {
				const gameCardData = mockAdjectiveData.map(({ maskuline, ukrainianTranslation }) => {
					return {
						question: maskuline,
						answer: ukrainianTranslation,
					};
				});
				return (
					<Game gameCardData={gameCardData} onFinishPress={handleFinishGamePress}/>
				);
			}

			case RootScreenName.NOUN_CONTENT: {
				const gameCardData = mockNounData.map(({ singular, ukrainianTranslation }) => {
					return {
						question: singular,
						answer: ukrainianTranslation,
					};
				});
				return (
					<Game gameCardData={gameCardData} onFinishPress={handleFinishGamePress}/>
				);
			}

			case RootScreenName.VERB_CONTENT: {
				const gameCardData = mockVerbData.map(({ infinitive, ukrainianTranslation }) => {
					return {
						question: infinitive,
						answer: ukrainianTranslation,
					};
				});
				return (
					<Game gameCardData={gameCardData} onFinishPress={handleFinishGamePress}/>
				);
			}
		}

		return null;
	};

	return (
		<>
			{
				gameHidden ? (
					<ScreenWrapper style={globalStyles.green}>
						<ScrollView
						ref={ref}
							contentContainerStyle={[
								globalStyles.gap24,
								globalStyles.flexGrow1,
								globalStyles.alignItemsCenter,
								globalStyles.p16,
							]}
							>
							{getScreen(name)}
						</ScrollView>
						<Pressable onPress={handleStartGamePress}>
							{
								({pressed}) => {
									const wrapperBackgroundColorStyle = pressed ? globalStyles.white : globalStyles.gray;
									const contentColor = pressed ? BaseColor.ORANGE : BaseColor.WHITE;
									return (
										<View style={[
											globalStyles.flexDirectionRow,
											globalStyles.justifyContentEnd,
											globalStyles.alignItemsCenter,
											globalStyles.gap16,
											globalStyles.ph16,
											globalStyles.pv8,
											wrapperBackgroundColorStyle,
										]}>
											<Text color={contentColor}>Почати гру</Text>
											<Icon color={contentColor} name='play-circle-outline' size={30}/>
										</View>
									);
								}
							}
						</Pressable>
					</ScreenWrapper>
				) : (
					<>{getGame(name)}</>
				)
			}
		</>
	);
};

export { PartOfSpeechContent };
