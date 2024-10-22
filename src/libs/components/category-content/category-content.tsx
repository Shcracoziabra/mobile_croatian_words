import React from 'react';
import { useHeaderHeight } from '@react-navigation/elements';

import { BackgroundWrapper, ScreenWrapper, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';

import { globalStyles } from '~/libs/styles/styles';

type Properties = {
	children: React.ReactNode
}

const CategoryContent: React.FC<Properties> = ({ children }) => {
	const headerHeight = useHeaderHeight();
	const topPaddingStyle = { paddingTop: headerHeight };

	return (
		<BackgroundWrapper filterColor={BaseColor.TRANSPARENT_BROWN}>
			<ScreenWrapper style={topPaddingStyle}>
			<View style={[globalStyles.flexDirectionRow, globalStyles.wrap, globalStyles.gap24, globalStyles.flex1, globalStyles.alignItemsCenter, globalStyles.justifyContentCenter, globalStyles.p16]}>
				{children}
			</View>
			</ScreenWrapper>
		</BackgroundWrapper>
	);
};

export { CategoryContent };
