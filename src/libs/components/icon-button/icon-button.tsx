import React from 'react';

import { Icon, TouchableHighlight } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { globalStyles } from '~/libs/styles/styles';
import { ValueOf, type IconName } from '~/libs/types/types';

import { styles } from './styles';

type Properties = {
	highlightColor: ValueOf<typeof BaseColor>;
	iconColor: ValueOf<typeof BaseColor>;
	iconName: IconName;
	label: string;
	onPress: () => void;
};

const ICON_SIZE = 30;

const IconButton: React.FC<Properties> = ({
	highlightColor,
	iconColor,
	iconName,
	label,
	onPress,
}) => {
	return (
		<TouchableHighlight
			accessible={true}
			accessibilityLabel={label}
			onPress={onPress}
			underlayColor={highlightColor}
			style={[
				globalStyles.r16,
				globalStyles.alignItemsCenter,
				globalStyles.justifyContentCenter,
				styles.button,
			]}
		>
			<Icon color={iconColor} name={iconName} size={ICON_SIZE} />
		</TouchableHighlight>
	);
};

export { IconButton };
