import {
	mockAdjectiveData,
	mockNounData,
	mockVerbData,
} from '~/libs/constants/constants';
import { CategoryEnglish } from '~/libs/enums/enums';
import { type AdjectiveDataItem, type NounDataItem, type VerbDataItem, type PartOfSpeechName, type GameDataItem } from '~/libs/types/types';

const getGameData = <T>(words: T[], screen: PartOfSpeechName): GameDataItem[] => {
	switch (screen) {
		case CategoryEnglish.ADJECTIVE: {
			const gameCardData = (words as AdjectiveDataItem[]).map(
				({ maskuline, ukrainianTranslation }) => {
					return {
						question: maskuline,
						answer: ukrainianTranslation,
					};
				},
			);
			return gameCardData;
		}

		case CategoryEnglish.NOUN: {
			const gameCardData = (words as NounDataItem[]).map(
				({ singular, ukrainianTranslation }) => {
					return {
						question: singular,
						answer: ukrainianTranslation,
					};
				},
			);
			return gameCardData;
		}

		case CategoryEnglish.VERB: {
			const gameCardData = (words as VerbDataItem[]).map(
				({ infinitive, ukrainianTranslation }) => {
					return {
						question: infinitive,
						answer: ukrainianTranslation,
					};
				},
			);
			return gameCardData;
		}
	}
};

export { getGameData };
