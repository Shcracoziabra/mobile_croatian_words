import {
	RootScreenName,
	AdjectiveScreenName,
	NounScreenName,
	VerbScreenName,
} from '~/libs/enums/enums';
import { RootNavigationParameterList } from '~/libs/types/types';

const partOfSpeechToScreenName = {
	[RootScreenName.ADJECTIVE]: AdjectiveScreenName,
	[RootScreenName.NOUN]: NounScreenName,
	[RootScreenName.VERB]: VerbScreenName,
} as const;

export { partOfSpeechToScreenName };
