import React from 'react';

import { BackgroundWrapper, ScreenWrapper, View, CategoryItemButton } from '~/libs/components/components';
import { HomeItems } from './libs/constants/constants';
import { BaseColor } from '~/libs/enums/enums';
import { useNavigation } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { type RootNavigationParameterList, type NativeStackNavigationProp } from '~/libs/types/types';

const Home: React.FC = () => {

	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	const homeButtons = HomeItems.map(({ label, screen }, index) => {
		return <CategoryItemButton key={index} label={label} onPress={()=>{ navigation.navigate(screen as any);}}/>;
	});

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper>
			<View style={[globalStyles. flex1, globalStyles.gap16, globalStyles.alignItemsCenter, globalStyles.justifyContentCenter, globalStyles.p16]}>
				{homeButtons}
			</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Home };
