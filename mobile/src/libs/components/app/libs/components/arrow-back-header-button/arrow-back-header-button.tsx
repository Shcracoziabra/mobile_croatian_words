import React from 'react';

import { IconButton } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { useNavigation } from '~/libs/hooks/hooks';
import { NativeStackNavigationProp, RootNavigationParameterList } from '~/libs/types/types';

const ArrowBackHeaderButton: React.FC = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootNavigationParameterList>>();
	return (
		<IconButton
			highlightColor={BaseColor.TRANSPARENT_GREEN}
			iconColor={BaseColor.WHITE}
			iconName='arrow-back'
			label='go back'
			onPress={() => navigation.goBack()}
		/>
	);
};

export { ArrowBackHeaderButton };
