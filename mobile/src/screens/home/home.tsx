import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	View,
	CategoryItemButton,
} from '~/libs/components/components';
import {
	BaseColor,
	CategoryUkrainian,
	RootScreenName,
} from '~/libs/enums/enums';
import { useNavigation } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import {
	type RootNavigationParameterList,
	type NativeStackNavigationProp,
	PartOfSpeechName,
} from '~/libs/types/types';

import { partOfSpeechItems } from './libs/constants/constants';

const Home: React.FC = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();

	const handleSpeechItemPress =
		(partOfSpeech: PartOfSpeechName) => (): void => {
			navigation.navigate(RootScreenName.WORD_NUMBERS_LIST, {
				partOfSpeechName: partOfSpeech,
			});
		};

	const handleTalePress = (): void => {
		navigation.navigate(RootScreenName.TALES_LIST);
	};

	const handleGrammarPress = (): void => {
		navigation.navigate(RootScreenName.GRAMMAR);
	};

	const partOfSpeechButtons = partOfSpeechItems.map(
		({ label, name }, index) => {
			return (
				<CategoryItemButton
					key={index}
					label={label}
					onPress={handleSpeechItemPress(name)}
				/>
			);
		},
	);

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_GREEN}>
			<ScreenWrapper>
				<View
					style={[
						globalStyles.flex1,
						globalStyles.gap16,
						globalStyles.alignItemsCenter,
						globalStyles.justifyContentCenter,
						globalStyles.p16,
					]}
				>
					{partOfSpeechButtons}
					<CategoryItemButton
						label={CategoryUkrainian.TALES}
						onPress={handleTalePress}
					/>
					<CategoryItemButton
						label={CategoryUkrainian.GRAMMAR}
						onPress={handleGrammarPress}
					/>
				</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Home };
