import React from 'react';

import {
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
} from '~/libs/components/components';

import { type ImageSourcePropType } from '~/libs/types/types';

import { styles } from './styles';

const BackgroundWrapper: React.FC = () => {
	return (
		<View style={styles.wrapper}>
			<Image
				resizeMode='cover'
				source={
					require('~/assets/backgrounds/main-bg.png') as ImageSourcePropType
				}
				style={styles.image}
			/>
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle='light-content' />
				<ScrollView contentInsetAdjustmentBehavior='automatic'>
					<Text>This is a test text</Text>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

export { BackgroundWrapper };
