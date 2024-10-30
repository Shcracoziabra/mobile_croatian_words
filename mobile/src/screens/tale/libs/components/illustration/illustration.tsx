import React from 'react';

import { Image, View } from '~/libs/components/components';
import { globalStyles } from '~/libs/styles/styles';
import { ImageSourcePropType } from '~/libs/types/types';

import { styles } from './styles';

type Properties = {
	imageSource: ImageSourcePropType;
};

const defaultImageSource =
	require('~/assets/illustrations/story_4.jpg') as ImageSourcePropType;

const Illustration: React.FC<Properties> = ({
	imageSource = defaultImageSource,
}) => {
	return (
		<View
			style={[
				globalStyles.flex1,
				globalStyles.r16,
				styles.container,
				globalStyles.boxShadow,
				globalStyles.gap8,
			]}
		>
			<Image
				resizeMode="cover"
				source={imageSource}
				style={[styles.image, globalStyles.r16]}
			/>
		</View>
	);
};

export { Illustration };
