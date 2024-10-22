import { CategoryUkrainian, RootScreenName } from '~/libs/enums/enums';

import { type ValueOf } from '~/libs/types/types';

type HomeItem = {
	label: ValueOf <typeof CategoryUkrainian>
	screen: ValueOf <typeof RootScreenName>
}

const HomeItems: HomeItem[] = [
	{
		label: CategoryUkrainian.VERB,
		screen: RootScreenName.VERB,
	},
	{
		label: CategoryUkrainian.NOUN,
		screen: RootScreenName.NOUN,
	},
	{
		label: CategoryUkrainian.ADJECTIVE,
		screen: RootScreenName.ADJECTIVE,
	},
	{
		label: CategoryUkrainian.TALE,
		screen: RootScreenName.TALE,
	},
	{
		label: CategoryUkrainian.GRAMMAR,
		screen: RootScreenName.GRAMMAR,
	},
];

export { HomeItems };
