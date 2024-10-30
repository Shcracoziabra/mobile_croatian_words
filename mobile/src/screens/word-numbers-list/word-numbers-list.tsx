import React from 'react';

import {
	BackgroundWrapper,
	CategoryContentButton,
	ScreenWrapper,
	View,
} from '~/libs/components/components';
import { CARDS_PER_PAGE } from '~/libs/constants/constants';
import {
	BaseColor,
	CategoryEnglish,
	NumericalValue,
	RootScreenName,
} from '~/libs/enums/enums';
import {
	useAppRoute,
	useHeaderHeight,
	useNavigation,
} from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import {
	type NativeStackNavigationProp,
	type RootNavigationParameterList,
} from '~/libs/types/types';

import { createListChunkSettingsData } from './libs/helpers/helpers';
import { ListChunkSettings } from './libs/types/types';

const mockWordContentLength = {
	[CategoryEnglish.ADJECTIVE]: 200,
	[CategoryEnglish.NOUN]: 300,
	[CategoryEnglish.VERB]: 120,
};

const WordNumbersList: React.FC = () => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	const { params } = useAppRoute<typeof RootScreenName.WORD_NUMBERS_LIST>();
	const { partOfSpeechName } = params;

	const listChunkSettingsData = createListChunkSettingsData({
		end: mockWordContentLength[partOfSpeechName],
		step: CARDS_PER_PAGE,
	});

	const handleContentItemPress = ({
		contentLength,
		startIndex,
	}: ListChunkSettings): void => {
		navigation.navigate(RootScreenName.WORD_CARDS, {
			partOfSpeechName,
			contentLength,
			startIndex,
		});
	};

	const listChunkButtons = listChunkSettingsData.map(
		({ contentLength, startIndex }, index) => {
			const firstWordNumber = startIndex + NumericalValue.ONE;
			const lastWordNumber = startIndex + contentLength;
			const label = firstWordNumber + ' - ' + lastWordNumber;
			return (
				<CategoryContentButton
					key={index}
					label={label}
					onPress={() => {
						handleContentItemPress({ contentLength, startIndex });
					}}
				/>
			);
		},
	);

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_GREEN}>
			<ScreenWrapper style={topPaddingStyle}>
				<View
					style={[
						globalStyles.flexDirectionRow,
						globalStyles.wrap,
						globalStyles.gap32,
						globalStyles.flex1,
						globalStyles.alignItemsCenter,
						globalStyles.justifyContentCenter,
						globalStyles.p16,
					]}
				>
					{listChunkButtons}
				</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { WordNumbersList };
