import {
	CategoryEnglish,
} from '~/libs/enums/enums';

const categoryToTableName = {
	[CategoryEnglish.ADJECTIVE]: 'adjectives',
	[CategoryEnglish.NOUN]: 'nouns',
	[CategoryEnglish.VERB]: 'verbs',
} as const;

export { categoryToTableName };
