import { Spacing } from './spacing';

const BorderRadius = {
	r8: { borderRadius: Spacing.xs },
	r16: { borderRadius: Spacing.md },
	r24: { borderRadius: Spacing.lg },
	r32: { borderRadius: Spacing.xl },

	rt16: { borderTopLeftRadius: Spacing.md, borderTopRightRadius: Spacing.md },
	rb16: {
		borderBottomLeftRadius: Spacing.md,
		borderBottomRightRadius: Spacing.md,
	},

	rtl16: { borderTopLeftRadius: Spacing.md },
	rtr16: { borderTopRightRadius: Spacing.md },
	rbl16: { borderBottomLeftRadius: Spacing.md },
	rbr16: { borderBottomRightRadius: Spacing.md },
} as const;

export { BorderRadius };
