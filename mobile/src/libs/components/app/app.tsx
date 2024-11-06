import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
	CategoryUkrainian,
	NumericalValue,
	RootScreenName,
} from '~/libs/enums/enums';
import { useEffect } from '~/libs/hooks/hooks';
import { Grammar } from '~/screens/grammar/grammar';
import { Home } from '~/screens/home/home';
import { WordNumbersList } from '~/screens/word-numbers-list/word-numbers-list';
import { TalesList } from '~/screens/tales-list/tales-list';
import { WordCards } from '~/screens/word-cards/word-cards';
import { RootNavigationParameterList } from '~/libs/types/types';
import { partOfSpeechToTitle } from '~/libs/maps/maps';
import { Tale } from '~/screens/tale/tale';
import { database } from '~/services/services';

import { ArrowBackHeaderButton, HomeHeaderButton } from './libs/components/components';
import { getScreenHeaderOptions } from './libs/helpers/helpers';

const Stack = createNativeStackNavigator<RootNavigationParameterList>();

const App: React.FC = () => {

	useEffect(()=> {
		database.initDatabase();
		return ():void => { database.disconnect();};
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={RootScreenName.HOME}
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen
						name={RootScreenName.GRAMMAR}
						component={Grammar}
						options={() => {
							const options = getScreenHeaderOptions({
								arrowBackButton: <ArrowBackHeaderButton/>,
								title: CategoryUkrainian.GRAMMAR,
							});
							return options;
						}}
					/>
					<Stack.Screen name={RootScreenName.HOME} component={Home} />
					<Stack.Screen
						name={RootScreenName.WORD_NUMBERS_LIST}
						component={WordNumbersList}
						options={({ route }) => {
							const { params } = route;
							const partOfSpeechTitle = partOfSpeechToTitle[params.partOfSpeechName];
							const options = getScreenHeaderOptions({
								arrowBackButton: <ArrowBackHeaderButton/>,
								title: partOfSpeechTitle,
							});
							return options;
						}}
					/>
					<Stack.Screen
						name={RootScreenName.TALES_LIST}
						component={TalesList}
						options={() => {
							const options = getScreenHeaderOptions({
								arrowBackButton: <ArrowBackHeaderButton/>,
								title: CategoryUkrainian.TALES,
							});
							return options;
						}}
					/>
					<Stack.Screen
						name={RootScreenName.TALE}
						component={Tale}
						options={({ route }) => {
							const { titleUk } = route.params;
							const options = getScreenHeaderOptions({
								arrowBackButton: <ArrowBackHeaderButton/>,
								homeButton: <HomeHeaderButton/>,
								title: titleUk,
							});
							return options;
						}}
					/>
					<Stack.Screen
						name={RootScreenName.WORD_CARDS}
						component={WordCards}
						options={({ route }) => {
							const { contentLength, partOfSpeechName, startIndex } =
								route.params;
							const start = startIndex + NumericalValue.ONE;
							const end = startIndex + contentLength;
							const header = partOfSpeechToTitle[partOfSpeechName];
							const options = getScreenHeaderOptions({
								arrowBackButton: <ArrowBackHeaderButton/>,
								homeButton: <HomeHeaderButton/>,
								title: header + ' ' + start + ' - ' + end,
							});
							return options;
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export { App };
