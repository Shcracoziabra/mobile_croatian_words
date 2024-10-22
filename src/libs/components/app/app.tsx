import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootScreenName } from '~/libs/enums/enums';
import { Grammar } from '~/screens/grammar/grammar';
import { Home } from '~/screens/home/home';
import { PartOfSpeech } from '~/screens/part-of-speech/part-of-speech';
import { Tales } from '~/screens/tales/tales';
import { Game } from '~/screens/game/game';


const Stack = createNativeStackNavigator();

const App: React.FC = () => {
	const partOfSpeechScreens = [RootScreenName.ADJECTIVE, RootScreenName.NOUN, RootScreenName.VERB].map((partOfSpeech, index) => {
		return (
			<Stack.Screen
				key={index}
				name={partOfSpeech}
				component={PartOfSpeech}
			/>
		);
	});

	return (
		<SafeAreaProvider>
			<NavigationContainer>
			<Stack.Navigator initialRouteName={RootScreenName.HOME} screenOptions={{
				headerShown: false,
			}}>
					<Stack.Screen name={RootScreenName.HOME} component={Home} />
					{partOfSpeechScreens}
					<Stack.Screen name={RootScreenName.GAME} component={Game} />
					<Stack.Screen name={RootScreenName.GRAMMAR} component={Grammar} />
					<Stack.Screen name={RootScreenName.TALE} component={Tales} />
      </Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export { App };
