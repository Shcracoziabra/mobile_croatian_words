import React from 'react';

import { Image, View } from '~/libs/components/components';

import { type ImageSourcePropType, type ValueOf } from '~/libs/types/types';

import { styles } from './styles';
import { globalStyles } from '~/libs/styles/styles';
import { BaseColor } from '~/libs/enums/enums';

type Properties = {
	children: React.ReactNode;
	imageSource?: ImageSourcePropType;
	filterColor?: ValueOf<typeof BaseColor>;
};

const defaultImageSource =
	require('~/assets/backgrounds/main-bg.png') as ImageSourcePropType;

const BackgroundWrapper: React.FC<Properties> = ({
	children,
	imageSource = defaultImageSource,
	filterColor,
}) => {
	return (
		<View style={globalStyles.flex1}>
			<Image
				resizeMode='cover'
				source={imageSource}
				style={styles.absoluteCover}
			/>
			{filterColor && (
				<View
					style={[styles.absoluteCover, { backgroundColor: filterColor }]}
				/>
			)}
			{children}
		</View>
	);
};

export { BackgroundWrapper };
