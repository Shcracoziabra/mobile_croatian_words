import React from 'react';

import { View, Text } from '~/libs/components/components';
import { BaseColor, GradientColor } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';
import { RoundButtonWithIndicator } from '../components';

type Properties = {
	translation: string;
	sentence: string;
};

const TaleSentence: React.FC<Properties> = ({ translation, sentence }) => {
	const [isTranslationShown, setIsTRanslationShown] = useState<boolean>(false);

	const handleToggleTranslationShown = (): void => {
		setIsTRanslationShown(!isTranslationShown);
	};

	const sentenceRadiusStyle = isTranslationShown
		? globalStyles.rt16
		: globalStyles.r16;

	return (
		<View style={[globalStyles.fullWidth]}>
			<View
				style={[
					globalStyles.flexDirectionRow,
					globalStyles.alignItemsEnd,
					globalStyles.gap12,
				]}
			>
				<View
					style={[
						globalStyles.flex1,
						globalStyles.p16,
						globalStyles.lightOrange,
						sentenceRadiusStyle,
					]}
				>
					<Text color={BaseColor.DARK_BROWN}>{sentence}</Text>
				</View>
				<RoundButtonWithIndicator
					colors={[...GradientColor.BLUE_YELLOW]}
					isActive={isTranslationShown}
					onPress={handleToggleTranslationShown}
				/>
			</View>
			{isTranslationShown && (
				<View
					style={[
						globalStyles.rb16,
						globalStyles.rtr16,
						globalStyles.p16,
						globalStyles.lightGray,
					]}
				>
					<Text color={BaseColor.DARK_BROWN}>{translation}</Text>
				</View>
			)}
		</View>
	);
};

export { TaleSentence };
