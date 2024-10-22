import { StyleSheet } from 'react-native';

import { BackgroundColor } from './background-color';
import { BorderRadius } from './border-radius';
import { BoxShadow } from './box-shadow';
import { Flex } from './flex';
import { Gap } from './gap';
import { Margin } from './margin';
import { Padding } from './padding';
import { Width } from './width';

const globalStyles = StyleSheet.create({
	...BackgroundColor,
	...BoxShadow,
	...BorderRadius,
	...Flex,
	...Gap,
	...Margin,
	...Padding,
	...Width,
});

export { globalStyles };
