import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

export const classNames = mergeStyleSets({
	wrapper: {
		flex: 1,
		flexDirection: 'column'
	},
	header: {
		flex: 1,
		textAlign: 'center',
		alignItems: 'center'
	},
	collections: {
		flex: 1
	},
	collection: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		border: '.15em solid black',
		borderRadius: '1em',
		padding: '2em',
		marginTop: '.15em'
	},
	avatar: {
		flex: 1
	},
	name: {
		flex: 3
	},
	email: {
		flex: 3
	},
	details: {
		flex: 3
	},
	editContact: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		padding: '0.25em',
		marginTop: '0.15em'
	},
	contact: {
		flex: 5,
		alignItems: 'center'
	},
	close: {
		flex: 1,
		marginTop: '1.55em'
	},
	icon: {
		fontSize: 20,
		height: 25,
		width: 25,
		margin: '0 25px'
	}
});

export const controlStyles = {
	root: {
		margin: '0 20px 20px 0',
		maxWidth: '300px'
	}
};
