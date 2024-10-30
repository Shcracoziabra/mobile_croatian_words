import {
	mockAdjectiveData,
	mockNounData,
	mockVerbData,
} from '~/libs/constants/constants';
import { CategoryEnglish } from '~/libs/enums/enums';
import { type PartOfSpeechName, type GameDataItem } from '~/libs/types/types';

const getGameData = (screen: PartOfSpeechName): GameDataItem[] => {
	switch (screen) {
		case CategoryEnglish.ADJECTIVE: {
			const gameCardData = mockAdjectiveData.map(
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
			const gameCardData = mockNounData.map(
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
			const gameCardData = mockVerbData.map(
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
