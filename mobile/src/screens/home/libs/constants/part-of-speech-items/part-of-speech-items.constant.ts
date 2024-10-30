import { CategoryUkrainian, CategoryEnglish } from '~/libs/enums/enums';

import { type PartOfSpeechName, type ValueOf } from '~/libs/types/types';

type PartOfSpeechItem = {
	label: ValueOf<typeof CategoryUkrainian>;
	name: PartOfSpeechName;
};

const partOfSpeechItems: PartOfSpeechItem[] = [
	{
		label: CategoryUkrainian.ADJECTIVE,
		name: CategoryEnglish.ADJECTIVE,
	},
	{
		label: CategoryUkrainian.NOUN,
		name: CategoryEnglish.NOUN,
	},
	{
		label: CategoryUkrainian.VERB,
		name: CategoryEnglish.VERB,
	},
];

export { partOfSpeechItems };
