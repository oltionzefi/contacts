import { mergeStyleSets } from '@fluentui/react';

export const classNames = mergeStyleSets({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		minWidth: 0,
		flex: 1,
	},
	collections: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		width: '100%',
	},
	editContact: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		padding: '0.25em',
		marginTop: '0.15em',
	},
	contact: {
		flex: 5,
		minWidth: 0,
	},
	close: {
		flexShrink: 0,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingTop: '1.5rem',
	},
	icon: {
		fontSize: 16,
		height: 16,
		width: 16,
	},
});
