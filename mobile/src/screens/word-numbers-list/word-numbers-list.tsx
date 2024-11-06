import React from 'react';

import {
	BackgroundWrapper,
	CategoryContentButton,
	ScreenWrapper,
	ScrollView,
} from '~/libs/components/components';
import { CARDS_PER_PAGE } from '~/libs/constants/constants';
import {
	BaseColor,
	NumericalValue,
	RootScreenName,
} from '~/libs/enums/enums';
import {
	useAppRoute,
	useEffect,
	useHeaderHeight,
	useNavigation,
	useState,
} from '~/libs/hooks/hooks';
import { categoryToTableName } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';
import {
	type NativeStackNavigationProp,
	type RootNavigationParameterList,
} from '~/libs/types/types';
import { database } from '~/services/services';

import { createListChunkSettingsData } from './libs/helpers/helpers';
import { ListChunkSettings } from './libs/types/types';

const WordNumbersList: React.FC = () => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	const { params } = useAppRoute<typeof RootScreenName.WORD_NUMBERS_LIST>();
	const { partOfSpeechName } = params;

	const [wordsCount, setWordsCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(()=> {
		const handleLoadWordsCount = async () => {
			const tableName = categoryToTableName[partOfSpeechName];
			const count = await database.getTableEntryCount(tableName);
			setWordsCount(count);
			setIsLoading(false);
		};
		handleLoadWordsCount();
	},[partOfSpeechName]);

	const listChunkSettingsData = createListChunkSettingsData({
		end: wordsCount,
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
			const lastWordNumber = startIndex + contentLength - NumericalValue.ONE;
			const label = startIndex + ' - ' + lastWordNumber;
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
			<ScreenWrapper isLoading={isLoading} style={topPaddingStyle}>
			<ScrollView
					contentContainerStyle={[
						globalStyles.flexDirectionRow,
						globalStyles.wrap,
						globalStyles.gap32,
						globalStyles.flexGrow1,
						globalStyles.justifyContentCenter,
						globalStyles.p16,
					]}
				>
					{listChunkButtons}
				</ScrollView>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { WordNumbersList };
