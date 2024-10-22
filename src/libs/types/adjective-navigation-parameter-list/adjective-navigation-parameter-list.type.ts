import { RootScreenName } from '~/libs/enums/enums';

type AdjectiveNavigationParameterList = {
	[RootScreenName.ADJECTIVE_CONTENT]: { startIndex: number, contentLength: number };
	[RootScreenName.ADJECTIVE_ITEMS]: undefined;
};

export { type AdjectiveNavigationParameterList };
