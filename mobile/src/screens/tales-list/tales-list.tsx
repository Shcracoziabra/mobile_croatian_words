import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	ScrollView,
} from '~/libs/components/components';
import { mockTalesList } from '~/libs/constants/constants';
import { BaseColor, NumericalValue, RootScreenName } from '~/libs/enums/enums';
import { useHeaderHeight, useNavigation } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import {
	ImageSourcePropType,
	RootNavigationParameterList,
	NativeStackNavigationProp,
} from '~/libs/types/types';

import { TaleListItem } from './libs/components/components';

const TalesList: React.FC = () => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();

	const handleTaleListItemPress =
		({
			imageSource,
			taleIndex,
			title,
		}: {
			taleIndex: number;
			title: string;
			imageSource: ImageSourcePropType;
		}) =>
		(): void => {
			navigation.navigate(RootScreenName.TALE, {
				taleIndex,
				title,
				imageSource,
			});
		};

	const taleListItems = mockTalesList.map(({ title, imageSource }, index) => {
		return (
			<TaleListItem
				key={index}
				title={title}
				imageSource={imageSource}
				onPress={handleTaleListItemPress({
					imageSource,
					taleIndex: NumericalValue.ZERO,
					title,
				})}
			/>
		);
	});

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper style={[topPaddingStyle]}>
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
