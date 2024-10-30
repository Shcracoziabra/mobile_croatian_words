import { RootScreenName } from '~/libs/enums/enums';
import { ImageSourcePropType, type PartOfSpeechName } from '~/libs/types/types';

type RootNavigationParameterList = {
	[RootScreenName.GRAMMAR]: undefined;
	[RootScreenName.HOME]: undefined;
	[RootScreenName.WORD_NUMBERS_LIST]: { partOfSpeechName: PartOfSpeechName };
	[RootScreenName.TALES_LIST]: undefined;
	[RootScreenName.TALE]: {
		taleIndex: number;
		title: string;
		imageSource: ImageSourcePropType;
	};
	[RootScreenName.WORD_CARDS]: {
		partOfSpeechName: PartOfSpeechName;
		startIndex: number;
		contentLength: number;
	};
};

export { type RootNavigationParameterList };
