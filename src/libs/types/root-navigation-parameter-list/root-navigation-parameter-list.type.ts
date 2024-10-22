import { RootScreenName } from '~/libs/enums/enums';
import { type GameDataItem } from '~/libs/types/types';

type RootNavigationParameterList = {
	[RootScreenName.ADJECTIVE]: undefined;
	[RootScreenName.GAME]: GameDataItem[];
	[RootScreenName.GRAMMAR]: undefined;
	[RootScreenName.HOME]: undefined;
	[RootScreenName.NOUN]: undefined;
	[RootScreenName.TALE]: undefined;
	[RootScreenName.VERB]: undefined;
};

export { type RootNavigationParameterList };
