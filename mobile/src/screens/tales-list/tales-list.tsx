import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	ScrollView,
} from '~/libs/components/components';
import { BaseColor, RootScreenName } from '~/libs/enums/enums';
import { useEffect, useHeaderHeight, useNavigation, useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import {
	ImageSourcePropType,
	RootNavigationParameterList,
	NativeStackNavigationProp,
} from '~/libs/types/types';

import { database } from '~/services/services';

import { TaleListItem } from './libs/components/components';

type StoryTitleQueryResultItem = {
	data: string;
	id: number
	titleHr: string;
	titleUk: string;
}

const TalesList: React.FC = () => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [stories, setStories] = useState<StoryTitleQueryResultItem[]>([]);

	const handleStoriesLoading = async(): Promise<void> => {
		const storiesQueryResult = await database.getStories();
		if(storiesQueryResult){
			setStories(storiesQueryResult);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		handleStoriesLoading();
	},[]);

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();

	const handleTaleListItemPress =
		({
			imageSource,
			taleIndex,
			titleHr,
			titleUk,
		}: {
			taleIndex: number;
			titleHr: string;
			titleUk: string;
			imageSource: ImageSourcePropType;
		}) =>
		(): void => {
			navigation.navigate(RootScreenName.TALE, {
				taleIndex,
				titleHr,
				titleUk,
				imageSource,
			});
		};

	const taleListItems = stories.map(({ id, titleUk, titleHr, data }) => {
		const imageSource = { uri: data };

		return (
			<TaleListItem
				key={id}
				title={titleUk}
				imageSource={imageSource}
				onPress={handleTaleListItemPress({
					imageSource,
					taleIndex: id,
					titleUk,
					titleHr,
				})}
			/>
		);
	});

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
					{taleListItems}
				</ScrollView>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { TalesList };
