import { Spacing } from './spacing';

const Padding = {
	p2: { padding: Spacing.xxs },
	p8: { padding: Spacing.xs },
	p12: { padding: Spacing.sm },
	p16: { padding: Spacing.md },
	p24: { padding: Spacing.lg },
	p32: { padding: Spacing.xl },
	p48: { padding: Spacing.xxl },

	pb2: { paddingBottom: Spacing.xxs },
	pb8: { paddingBottom: Spacing.xs },
	pb12: { paddingBottom: Spacing.sm },
	pb16: { paddingBottom: Spacing.md },
	pb24: { paddingBottom: Spacing.lg },
	pb32: { paddingBottom: Spacing.xl },
	pb48: { paddingBottom: Spacing.xxl },

	ph8: { paddingHorizontal: Spacing.xs },
	ph12: { paddingHorizontal: Spacing.sm },
	ph16: { paddingHorizontal: Spacing.md },
	ph24: { paddingHorizontal: Spacing.lg },
	ph32: { paddingHorizontal: Spacing.xl },
	ph48: { paddingHorizontal: Spacing.xxl },

	pl8: { paddingLeft: Spacing.xs },
	pl12: { paddingLeft: Spacing.sm },
	pl16: { paddingLeft: Spacing.md },
	pl24: { paddingLeft: Spacing.lg },
	pl32: { paddingLeft: Spacing.xl },
	pl48: { paddingLeft: Spacing.xxl },

	pr8: { paddingRight: Spacing.xs },
	pr12: { paddingRight: Spacing.sm },
	pr16: { paddingRight: Spacing.md },
	pr24: { paddingRight: Spacing.lg },
	pr32: { paddingRight: Spacing.xl },
	pr48: { paddingRight: Spacing.xxl },

	pt2: { paddingTop: Spacing.xxs },
	pt8: { paddingTop: Spacing.xs },
	pt12: { paddingTop: Spacing.sm },
	pt16: { paddingTop: Spacing.md },
	pt24: { paddingTop: Spacing.lg },
	pt32: { paddingTop: Spacing.xl },
	pt48: { paddingTop: Spacing.xxl },

	pv8: { paddingVertical: Spacing.xs },
	pv12: { paddingVertical: Spacing.sm },
	pv16: { paddingVertical: Spacing.md },
	pv24: { paddingVertical: Spacing.lg },
	pv32: { paddingVertical: Spacing.xl },
	pv48: { paddingVertical: Spacing.xxl },
} as const;

export { Padding };
