import { Spacing } from './spacing';

const Margin = {
	m8: { margin: Spacing.xs },
	m12: { margin: Spacing.sm },
	m16: { margin: Spacing.md },
	m24: { margin: Spacing.lg },
	m32: { margin: Spacing.xl },
	m48: { margin: Spacing.xxl },

	mb8: { marginBottom: Spacing.xs },
	mb12: { marginBottom: Spacing.sm },
	mb16: { marginBottom: Spacing.md },
	mb24: { marginBottom: Spacing.lg },
	mb32: { marginBottom: Spacing.xl },
	mb48: { marginBottom: Spacing.xxl },

	mh8: { marginHorizontal: Spacing.xs },
	mh12: { marginHorizontal: Spacing.sm },
	mh16: { marginHorizontal: Spacing.md },
	mh24: { marginHorizontal: Spacing.lg },
	mh32: { marginHorizontal: Spacing.xl },
	mh48: { marginHorizontal: Spacing.xxl },

	ml8: { marginLeft: Spacing.xs },
	ml12: { marginLeft: Spacing.sm },
	ml16: { marginLeft: Spacing.md },
	ml24: { marginLeft: Spacing.lg },
	ml32: { marginLeft: Spacing.xl },
	ml48: { marginLeft: Spacing.xxl },

	mr8: { marginRight: Spacing.xs },
	mr12: { marginRight: Spacing.sm },
	mr16: { marginRight: Spacing.md },
	mr24: { marginRight: Spacing.lg },
	mr32: { marginRight: Spacing.xl },
	mr48: { marginRight: Spacing.xxl },

	mt8: { marginTop: Spacing.xs },
	mt12: { marginTop: Spacing.sm },
	mt16: { marginTop: Spacing.md },
	mt24: { marginTop: Spacing.lg },
	mt32: { marginTop: Spacing.xl },
	mt48: { marginTop: Spacing.xxl },

	mv8: { marginVertical: Spacing.xs },
	mv12: { marginVertical: Spacing.sm },
	mv16: { marginVertical: Spacing.md },
	mv24: { marginVertical: Spacing.lg },
	mv32: { marginVertical: Spacing.xl },
	mv48: { marginVertical: Spacing.xxl },
} as const;

export { Margin };
