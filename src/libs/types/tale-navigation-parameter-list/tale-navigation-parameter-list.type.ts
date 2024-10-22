import { TaleScreenName } from '~/libs/enums/enums';

type TaleNavigationParameterList = {
	[TaleScreenName.CONTENT]: { taleIndex: number };
	[TaleScreenName.ITEMS]: undefined;
};

export { type TaleNavigationParameterList };
