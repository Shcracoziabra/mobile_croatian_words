import { CategoryEnglish } from '~/libs/enums/enums';

type PartOfSpeechName =
	| typeof CategoryEnglish.ADJECTIVE
	| typeof CategoryEnglish.NOUN
	| typeof CategoryEnglish.VERB;
export { type PartOfSpeechName };
