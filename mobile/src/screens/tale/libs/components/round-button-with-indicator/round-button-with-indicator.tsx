import React from 'react';

import { LinearGradient, Pressable, View } from '~/libs/components/components';
import { GradientColor } from '~/libs/enums/enums';
import { directionToGradient } from '~/libs/maps/maps';
import { globalStyles } from '~/libs/styles/styles';
import { ValueOf } from '~/libs/types/types';

import { styles } from './styles';

type Properties = {
	colors: ValueOf<typeof GradientColor>;
	isActive?: boolean;
	onPress: () => void;
};

const RoundButtonWithIndicator: React.FC<Properties> = ({
	colors,
	isActive = false,
	onPress,
}) => {
	const { end, start } = directionToGradient.topToBottom;
	const indicatorActivityStyle = isActive ? styles.active : styles.inActive;

	return (
		<Pressable
			hitSlop={20}
			onPress={onPress}
			style={[styles.button, globalStyles.mb8]}
		>
			<LinearGradient
				colors={[...colors]}
				end={end}
				locations={[0.5, 0.5]}
				start={start}
				style={[
					globalStyles.flex1,
					globalStyles.alignItemsCenter,
					globalStyles.justifyContentCenter,
					styles.button,
				]}
			>
				<View style={[styles.indicator, indicatorActivityStyle]} />
			</LinearGradient>
		</Pressable>
	);
};

export { RoundButtonWithIndicator };
