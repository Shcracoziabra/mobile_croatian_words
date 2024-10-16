import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { BackgroundWrapper } from '~/libs/components/components';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<BackgroundWrapper />
		</NavigationContainer>
	);
};

export { App };
