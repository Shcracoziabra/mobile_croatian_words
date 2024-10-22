// import { useRoute } from '@react-navigation/native';

// import { type NavigationScreenProperties } from '~/libs/types/types';

// const useAppRoute = <T extends NavigationScreenProperties>(): T['route'] => {
// 	return useRoute<T['route']>();
// };

// export { useAppRoute };

import { type RouteProp, useRoute, type ParamListBase } from '@react-navigation/native';

import { type RootNavigationParameterList } from '~/libs/types/types';

const useAppRoute = <T extends ParamListBase, K extends keyof T = keyof T>(): RouteProp<T, K> => {
	return useRoute<RouteProp<T, K>>();
};

export { useAppRoute };
