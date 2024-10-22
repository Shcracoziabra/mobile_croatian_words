import { RootScreenName } from '~/libs/enums/enums';

type VerbNavigationParameterList = {
	[RootScreenName.VERB_CONTENT]: { startIndex: number, contentLength: number };
	[RootScreenName.VERB_ITEMS]: undefined;
};

export { type VerbNavigationParameterList };
