import { CategoryEnglish, CategoryUkrainian } from '~/libs/enums/enums';

const partOfSpeechToTitle = {
	[CategoryEnglish.ADJECTIVE]: CategoryUkrainian.ADJECTIVE,
	[CategoryEnglish.NOUN]: CategoryUkrainian.NOUN,
	[CategoryEnglish.VERB]: CategoryUkrainian.VERB,
};

export { partOfSpeechToTitle };
