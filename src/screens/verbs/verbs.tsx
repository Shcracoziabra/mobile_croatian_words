import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryContent, CategoryContentButton, ScreenWrapper, Text } from '~/libs/components/components';
import { BaseColor, CategoryUkrainian, NumericalValue, RootScreenName } from '~/libs/enums/enums';

import { globalStyles } from '~/libs/styles/styles';

type VerbsContentItemData = {
	start: number,
	length: number,
}

type HandleVerbContentitemPressArguments = {
	navigation: any;
	wordNumbers: string;
}

const mockVerbCategoryContentItemsData: VerbsContentItemData[] = [
	{ start: 0, length: 25},
	{ start: 25, length: 25},
	{ start: 50, length: 25},
	{ start: 75, length: 25},
];

const Stack = createNativeStackNavigator();

const Verbs: React.FC = () => {

	const handleVerbContentitemPress = ({ navigation, wordNumbers }: HandleVerbContentitemPressArguments): void => {
		navigation.navigate({
			name: RootScreenName.VERB_CONTENT,
			params: {
				wordNumbers,
			},
		});
	};

	return (
		<Stack.Navigator initialRouteName={RootScreenName.VERB_ITEMS} >
			<Stack.Screen name={RootScreenName.VERB_ITEMS} options={{
				headerTitle: CategoryUkrainian.VERB,
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: BaseColor.WHITE,
					fontFamily: 'Roboto-Bold',
					fontSize: 24,
				},
				headerStyle: {
					backgroundColor: BaseColor.TRANSPARENT_GRAY,
				},
				headerTransparent: true,
			}}>
				{(props) => {
					return (
						<CategoryContent {...props}>
							{mockVerbCategoryContentItemsData.map(({ start, length }, index) => {
								const firstWordNumber = start + NumericalValue.ONE;
								const lastWordNumber = start + length;
								const label = firstWordNumber + ' - ' + lastWordNumber;
								return (
								<CategoryContentButton
									key={index}
									label={label}
									onPress={() => {handleVerbContentitemPress({ navigation: props.navigation, wordNumbers: label });}}
								/>);
							})}
						</CategoryContent>
						);
				}}
			</Stack.Screen>
			<Stack.Screen
				name={RootScreenName.VERB_CONTENT}
				options={({ route }) => ({
					title: CategoryUkrainian.VERB + ' ' + route.params?.wordNumbers,
				})}
			>
				{(props) => {
					return (
						<ScreenWrapper {...props} style={globalStyles.green}>
							<Text>Verb Cards Here</Text>
						</ScreenWrapper>
					);
				}}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

export { Verbs };
