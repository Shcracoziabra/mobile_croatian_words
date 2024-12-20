import React from 'react';
import { type Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, View } from '~/libs/components/components';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';
import { type StyleProp, type ViewStyle } from '~/libs/types/types';

import { EdgeDirection } from './libs/enums/enums';

type Properties = {
	children: React.ReactNode;
	edges?: Edge[];
	isLoading?: boolean;
	style?: StyleProp<ViewStyle>;
};

const DEFAULT_SAFE_AREA_EDGES: Edge[] = [
	EdgeDirection.TOP,
	EdgeDirection.BOTTOM,
	EdgeDirection.LEFT,
	EdgeDirection.TOP,
];

const ScreenWrapper: React.FC<Properties> = ({
	children,
	edges = DEFAULT_SAFE_AREA_EDGES,
	isLoading = false,
	style,
}: Properties): JSX.Element => {
	const insets = useSafeAreaInsets();

	const paddingStyle = {
		paddingBottom: edges.includes(EdgeDirection.BOTTOM)
			? insets.bottom
			: NumericalValue.ZERO,
		paddingLeft: edges.includes(EdgeDirection.LEFT)
			? insets.left
			: NumericalValue.ZERO,
		paddingRight: edges.includes(EdgeDirection.RIGHT)
			? insets.right
			: NumericalValue.ZERO,
		paddingTop: edges.includes(EdgeDirection.TOP)
			? insets.top
			: NumericalValue.ZERO,
	};

	return (
		<>
		{isLoading
			? <View style={[globalStyles.flex1, paddingStyle, globalStyles.alignItemsCenter, globalStyles.justifyContentCenter]}>
					<Text color={BaseColor.WHITE} preset='uppercase' size='lg'>Loading...</Text>
				</View>
			: <View style={[globalStyles.flex1, paddingStyle, style]}>{children}</View>
		}
		</>
	);
};

export { ScreenWrapper };
