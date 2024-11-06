import React from 'react';

import { IconButton } from '~/libs/components/components';
import { BaseColor, RootScreenName } from '~/libs/enums/enums';
import { useNavigation } from '~/libs/hooks/hooks';
import { NativeStackNavigationProp, RootNavigationParameterList } from '~/libs/types/types';

const HomeHeaderButton: React.FC = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList, typeof RootScreenName.HOME>>();
	return (
		<IconButton
			highlightColor={BaseColor.TRANSPARENT_GREEN}
			iconColor={BaseColor.WHITE}
			iconName='home'
			label='go to home page'
			onPress={() => navigation.navigate(RootScreenName.HOME)}
		/>
	);
};

export { HomeHeaderButton };
