import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	View,
	Text,
} from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';

const Grammar: React.FC = () => {
	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper>
				<View
					style={[
						globalStyles.alignItemsCenter,
						globalStyles.justifyContentCenter,
						globalStyles.p16,
						globalStyles.lightOrange,
					]}
				>
					<Text color={BaseColor.DARK_BROWN}>
						Розділ граматики в розробці...
					</Text>
				</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Grammar };
