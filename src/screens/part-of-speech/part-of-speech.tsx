import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryContent, CategoryContentButton } from '~/libs/components/components';
import { useAppRoute, useNavigation } from '~/libs/hooks/hooks';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { type NativeStackNavigationProp, type RootNavigationParameterList, type PartOfSpeechName } from '~/libs/types/types';

import { PartOfSpeechContent } from './libs/components/components';
import { partOfSpeechToTitle, partOfSpeechToScreenName } from './libs/maps/maps';
import { rootScreenNameToUkrainian } from '~/libs/maps/maps';

type ContentItemData = {
	startIndex: number,
	contentLength: number,
}


const mockCategoryContentItemsData: ContentItemData[] = [
	{ startIndex: 0, contentLength: 25},
	{ startIndex: 25, contentLength: 25},
	{ startIndex: 50, contentLength: 25},
	{ startIndex: 75, contentLength: 25},
];

const Stack = createNativeStackNavigator();

const PartOfSpeech: React.FC = () => {

	const { name } = useAppRoute<RootNavigationParameterList>();

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();

	const { ITEMS: itemsScreenName, CONTENT: contentScreenName } = partOfSpeechToScreenName[name as keyof typeof partOfSpeechToScreenName];
	const headerTitle = rootScreenNameToUkrainian[name];

	const handleContentItemPress = ({ contentLength, startIndex }: ContentItemData): void => {
		navigation.navigate(contentScreenName, { contentLength, startIndex });
	};

	return (
		<Stack.Navigator initialRouteName={itemsScreenName} >
			<Stack.Screen name={itemsScreenName} options={{
				headerTitle,
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: BaseColor.WHITE,
					fontFamily: 'Roboto-Thin',
				},
				headerStyle: {
					backgroundColor: BaseColor.TRANSPARENT_GRAY,
				},
				headerTransparent: true,
			}}>
				{(props) => {
					return (
						<CategoryContent {...props}>
							{mockCategoryContentItemsData.map(({ contentLength, startIndex }, index) => {
								const firstWordNumber = startIndex + NumericalValue.ONE;
								const lastWordNumber = startIndex + contentLength;
								const label = firstWordNumber + ' - ' + lastWordNumber;
								return (
								<CategoryContentButton
									key={index}
									label={label}
									onPress={() => {handleContentItemPress({ contentLength, startIndex  });}}
								/>);
							})}
						</CategoryContent>
						);
				}}
			</Stack.Screen>
			<Stack.Screen
				name={contentScreenName}
				options={({ route }) => {
					const { startIndex, contentLength } = route.params;
					const firstWordNumber = startIndex + NumericalValue.ONE;
					const lastWordNumber = startIndex + contentLength;
					const label = firstWordNumber + ' - ' + lastWordNumber;
					return {
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: BaseColor.WHITE,
							fontFamily: 'Roboto-Thin',
						},
						headerStyle: {
							backgroundColor: BaseColor.GRAY,
						},
						title: headerTitle + ' ' + label,
					};
				}}
				component={PartOfSpeechContent}
			/>
		</Stack.Navigator>
	);
};

export { PartOfSpeech };
