import { NumericalValue } from '~/libs/enums/enums';
import { type ListChunkSettings } from '../../types/types';

type Arguments = {
	end: number;
	start?: number;
	step?: number;
};

const createListChunkSettingsData = ({
	end,
	start = NumericalValue.ZERO,
	step = NumericalValue.ONE,
}: Arguments): ListChunkSettings[] => {
	let listChunkSettingsData: ListChunkSettings[] = [];

	for (let i = start; i < end; i += step) {
		const contentLength = end - i < step ? end - i : step;
		listChunkSettingsData.push({ contentLength, startIndex: i + NumericalValue.ONE });
	}

	return listChunkSettingsData;
};

export { createListChunkSettingsData };
