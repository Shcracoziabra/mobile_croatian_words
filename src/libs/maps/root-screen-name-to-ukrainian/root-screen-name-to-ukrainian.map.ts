import { RootScreenName, UkrainianScreenTranslation } from '~/libs/enums/enums';
import { RootNavigationParameterList } from '~/libs/types/types';


type TranslationEnglishToUkrainian<T> = {
	[Property in keyof T]: string
};

type ScreenTranslation = TranslationEnglishToUkrainian<RootNavigationParameterList>;

const rootScreenNameToUkrainian: ScreenTranslation = {
	[RootScreenName.ADJECTIVE]: UkrainianScreenTranslation.ADJECTIVE,
	[RootScreenName.GAME]: UkrainianScreenTranslation.GAME,
	[RootScreenName.GRAMMAR]: UkrainianScreenTranslation.GRAMMAR,
	[RootScreenName.HOME]: UkrainianScreenTranslation.HOME,
	[RootScreenName.NOUN]: UkrainianScreenTranslation.NOUN,
	[RootScreenName.TALE]: UkrainianScreenTranslation.TALE,
	[RootScreenName.VERB]: UkrainianScreenTranslation.VERB,
};

export { rootScreenNameToUkrainian };
