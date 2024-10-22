import React from 'react';

import { BackgroundWrapper, ScreenWrapper, View, Text } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';

import { globalStyles } from '~/libs/styles/styles';
import { type ImageSourcePropType } from '~/libs/types/types';

const Tales: React.FC = () => {
	const backgroundImageSource = require('~/assets/backgrounds/story_8.png') as ImageSourcePropType;

	return (
		<BackgroundWrapper imageSource={backgroundImageSource} filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper>
			<View style={[globalStyles. flex1, globalStyles.gap16, globalStyles.alignItemsCenter, globalStyles.justifyContentCenter, globalStyles.p16]}>
				<Text>Tales</Text>
			</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Tales };
