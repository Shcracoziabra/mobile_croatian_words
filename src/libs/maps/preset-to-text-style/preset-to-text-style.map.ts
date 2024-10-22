import { type StyleProp, type TextStyle } from '~/libs/types/types';

import { fontWeightToFamily, sizeToTextStyle } from '../maps';

type Preset =
	| 'default'
	| 'heading'
	| 'large'
	| 'thin'
	| 'caption'
	| 'uppercase';

const BASE_STYLES = [sizeToTextStyle.md, fontWeightToFamily.semiBold];

const presetToTextStyle: Record<Preset, StyleProp<TextStyle>> = {
	caption: [sizeToTextStyle.sm, fontWeightToFamily.semiBold],
	default: BASE_STYLES,
	heading: [sizeToTextStyle.md, fontWeightToFamily.semiBold],
	large: [sizeToTextStyle.lg, fontWeightToFamily.semiBold],
	thin: [sizeToTextStyle.md, fontWeightToFamily.light],
	uppercase: [...BASE_STYLES, { textTransform: 'uppercase' }],
};

export { presetToTextStyle };
