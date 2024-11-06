import React from 'react';

import {
	BackgroundWrapper,
	ScreenWrapper,
	View,
	Text,
} from '~/libs/components/components';
import { useHeaderHeight } from '~/libs/hooks/hooks';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';

const Grammar: React.FC = () => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper style={topPaddingStyle}>
				<View
					style={[
						globalStyles.alignItemsCenter,
						globalStyles.justifyContentCenter,
						globalStyles.p16,
					]}
				>
					<Text color={BaseColor.WHITE} preset='uppercase' size='lg'>
						Наразі розділ ще не готовий, тому поки рахуйте жабок.
					</Text>
				</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { Grammar };
