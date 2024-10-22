import { RootScreenName } from '~/libs/enums/enums';

type NounNavigationParameterList = {
	[RootScreenName.NOUN_CONTENT]: { startIndex: number, contentLength: number };
	[RootScreenName.NOUN_ITEMS]: undefined;
};

export { type NounNavigationParameterList };
