import {
	type NavigationProp,
	type RouteProp,
} from '@react-navigation/native';
import { RootNavigationParameterList } from '~/libs/types/types';

type RootNavigationScreenProperties = {
	navigation: NavigationProp<RootNavigationParameterList>;
	route: RouteProp<RootNavigationParameterList>;
};

export { type RootNavigationScreenProperties };
