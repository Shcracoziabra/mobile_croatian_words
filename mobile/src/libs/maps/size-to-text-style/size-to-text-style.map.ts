import { type TextStyle } from '~/libs/types/types';

const sizeToTextStyle = {
	lg: { fontSize: 24, lineHeight: 28 } satisfies TextStyle,
	md: { fontSize: 20, lineHeight: 24 } satisfies TextStyle,
	sm: { fontSize: 18, lineHeight: 20 } satisfies TextStyle,
};

export { sizeToTextStyle };
