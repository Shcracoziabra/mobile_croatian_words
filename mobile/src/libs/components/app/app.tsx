import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { IconButton } from '~/libs/components/components';
import {
	BaseColor,
	CategoryUkrainian,
	NumericalValue,
	RootScreenName,
} from '~/libs/enums/enums';
import { Grammar } from '~/screens/grammar/grammar';
import { Home } from '~/screens/home/home';
import { WordNumbersList } from '~/screens/word-numbers-list/word-numbers-list';
import { TalesList } from '~/screens/tales-list/tales-list';
import { WordCards } from '~/screens/word-cards/word-cards';
import { RootNavigationParameterList } from '~/libs/types/types';
import { partOfSpeechToTitle } from '~/libs/maps/maps';
import { Tale } from '~/screens/tale/tale';

const Stack = createNativeStackNavigator<RootNavigationParameterList>();

const App: React.FC = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={RootScreenName.HOME}
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name={RootScreenName.GRAMMAR} component={Grammar} />
					<Stack.Screen name={RootScreenName.HOME} component={Home} />
					<Stack.Screen
						name={RootScreenName.WORD_NUMBERS_LIST}
						component={WordNumbersList}
						options={({ navigation, route }) => {
							const { params } = route;
							return {
								title: partOfSpeechToTitle[params.partOfSpeechName],
								headerLeft: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="arrow-back"
										label="go back"
										onPress={() => navigation.goBack()}
									/>
								),
								headerShown: true,
								headerTitleAlign: 'center',
								headerTitleStyle: {
									color: BaseColor.WHITE,
									fontFamily: 'Roboto-Thin',
								},
								headerStyle: {
									backgroundColor: BaseColor.TRANSPARENT_GRAY,
								},
								headerTransparent: true,
							};
						}}
					/>
					<Stack.Screen
						name={RootScreenName.TALES_LIST}
						component={TalesList}
						options={({ navigation, route }) => {
							const { params } = route;
							return {
								title: CategoryUkrainian.TALES,
								headerLeft: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="arrow-back"
										label="go back"
										onPress={() => navigation.goBack()}
									/>
								),
								headerShown: true,
								headerTitleAlign: 'center',
								headerTitleStyle: {
									color: BaseColor.WHITE,
									fontFamily: 'Roboto-Thin',
								},
								headerStyle: {
									backgroundColor: BaseColor.TRANSPARENT_GRAY,
								},
								headerTransparent: true,
							};
						}}
					/>
					<Stack.Screen
						name={RootScreenName.TALE}
						component={Tale}
						options={({ navigation, route }) => {
							const { title } = route.params;
							return {
								title: title.slice(NumericalValue.ZERO, 20) + '...',
								headerLeft: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="arrow-back"
										label="go back"
										onPress={() => navigation.goBack()}
									/>
								),
								headerRight: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="home"
										label="go to home page"
										onPress={() => navigation.navigate(RootScreenName.HOME)}
									/>
								),
								headerShown: true,
								headerTitleAlign: 'center',
								headerTitleStyle: {
									color: BaseColor.WHITE,
									fontFamily: 'Roboto-Thin',
								},
								headerStyle: {
									backgroundColor: BaseColor.TRANSPARENT_GRAY,
								},
								headerTransparent: true,
							};
						}}
					/>
					<Stack.Screen
						name={RootScreenName.WORD_CARDS}
						component={WordCards}
						options={({ navigation, route }) => {
							const { contentLength, partOfSpeechName, startIndex } =
								route.params;
							const start = startIndex + NumericalValue.ONE;
							const end = startIndex + contentLength;
							const header = partOfSpeechToTitle[partOfSpeechName];
							return {
								title: header + ' ' + start + ' - ' + end,
								headerLeft: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="arrow-back"
										label="go back"
										onPress={() => navigation.goBack()}
									/>
								),
								headerRight: () => (
									<IconButton
										highlightColor={BaseColor.TRANSPARENT_GREEN}
										iconColor={BaseColor.WHITE}
										iconName="home"
										label="go to home page"
										onPress={() => navigation.navigate(RootScreenName.HOME)}
									/>
								),
								headerShown: true,
								headerTitleAlign: 'center',
								headerTitleStyle: {
									color: BaseColor.WHITE,
									fontFamily: 'Roboto-Thin',
								},
								headerStyle: {
									backgroundColor: BaseColor.TRANSPARENT_GRAY,
								},
								headerTransparent: true,
							};
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export { App };
