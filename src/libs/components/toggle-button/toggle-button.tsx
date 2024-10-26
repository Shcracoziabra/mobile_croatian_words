import React from 'react';

import { Pressable, Text, View } from '~/libs/components/components';
import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { ValueOf } from '~/libs/types/types';

import { globalStyles } from '~/libs/styles/styles';
import { styles } from './styles';

type Properties = {
	colors: [ValueOf<typeof BaseColor>, ValueOf<typeof BaseColor>];
	isLeftPartActive: boolean;
	labels: [string, string];
	onToggleFunction: () => void;
};

const ToggleButton: React.FC<Properties> = ({
	colors,
	isLeftPartActive,
	labels,
	onToggleFunction,
}) => {
	const wrapperBackgroundColorStyle = {
		backgroundColor: colors[NumericalValue.ZERO],
	};

	const innerButtons = labels.map((label, index) => {
		const labelColor =
			isLeftPartActive !== Boolean(index)
				? colors[NumericalValue.ZERO]
				: colors[NumericalValue.ONE];
		const backgroundColor =
			isLeftPartActive !== Boolean(index)
				? colors[NumericalValue.ONE]
				: colors[NumericalValue.ZERO];
		const alignItemsStyle = index
			? globalStyles.alignItemsEnd
			: globalStyles.alignItemsStart;
		const backgroundColorStyle = { backgroundColor };

		return (
			<Pressable key={index} onPress={onToggleFunction} style={styles.content}>
				<View
					style={[
						globalStyles.flexDirectionRow,
						globalStyles.justifyContentCenter,
						globalStyles.gap16,
						globalStyles.p8,
						globalStyles.r24,
						backgroundColorStyle,
						alignItemsStyle,
					]}
				>
					<Text color={labelColor} weight="bold">
						{label}
					</Text>
				</View>
			</Pressable>
		);
	});

	return (
		<View style={[globalStyles.alignItemsCenter, globalStyles.pv12]}>
			<View
				style={[
					globalStyles.flexDirectionRow,
					globalStyles.p2,
					globalStyles.r24,
					wrapperBackgroundColorStyle,
					styles.container,
				]}
			>
				{innerButtons}
			</View>
		</View>
	);
};

export { ToggleButton };
