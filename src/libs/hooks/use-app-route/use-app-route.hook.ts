import { type RouteProp, useRoute } from '@react-navigation/native';

import { type RootNavigationParameterList } from '~/libs/types/types';

const useAppRoute = <
	T extends
		keyof RootNavigationParameterList = keyof RootNavigationParameterList,
>(): RouteProp<RootNavigationParameterList, T> => {
	return useRoute<RouteProp<RootNavigationParameterList, T>>();
};

export { useAppRoute };
