import React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { WithTranslation, withTranslation } from 'react-i18next';
import { translateItems } from '../utils/libs';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

const toolbarItems: ICommandBarItemProps[] = [
	{
		text: 'New',
		key: 'contacts.menu.main.new',
		cacheKey: 'newContact', // changing this key will invalidate this item's cache
		iconProps: { iconName: 'Add' },
		href: 'new'
	},
	{
		text: 'Upload',
		key: 'contacts.menu.main.upload',
		iconProps: { iconName: 'Upload' },
		href: 'upload'
	},
	{
		text: 'Share',
		key: 'contacts.menu.main.share',
		iconProps: { iconName: 'Share' },
		onClick: () => console.log('Share')
	},
	{
		text: 'Download',
		key: 'contacts.menu.main.download',
		iconProps: { iconName: 'Download' },
		onClick: () => console.log('Download')
	}
];

const overflowItems: ICommandBarItemProps[] = [
	{
		text: 'Move to...',
		key: 'contacts.menu.main.move',
		onClick: () => console.log('Move to'),
		iconProps: { iconName: 'MoveToFolder' }
	},
	{
		text: 'Copy to...',
		key: 'contacts.menu.main.copy',
		onClick: () => console.log('Copy to'),
		iconProps: { iconName: 'Copy' }
	},
	{
		text: 'Rename...',
		key: 'contacts.menu.main.rename',
		onClick: () => console.log('Rename'),
		iconProps: { iconName: 'Edit' }
	}
];

const farItems: ICommandBarItemProps[] = [
	{
		text: 'Grid view',
		key: 'contacts.menu.main.gridview',
		// This needs an ariaLabel since it's icon-only
		ariaLabel: 'Grid view',
		iconOnly: true,
		iconProps: { iconName: 'Tiles' },
		onClick: () => console.log('Tiles')
	},
	{
		text: 'Info',
		key: 'contacts.menu.main.info',
		// This needs an ariaLabel since it's icon-only
		ariaLabel: 'Info',
		iconOnly: true,
		iconProps: { iconName: 'Info' },
		onClick: () => console.log('Info')
	},
	{
		text: 'Close',
		key: 'contacts.menu.main.close',
		// This needs an ariaLabel since it's icon-only
		ariaLabel: 'Close',
		iconOnly: true,
		iconProps: { iconName: 'ChromeClose' },
		href: '/'
	}
];

const ToolbarComponent = (props: WithTranslation) => {
	const { t } = props;
	let transToolbarItems = translateItems(props)(toolbarItems);
	let transOverflowItems = translateItems(props)(overflowItems);
	let transFarItems = translateItems(props)(farItems);
	return (
		<div>
			<CommandBar
				items={transToolbarItems}
				overflowItems={transOverflowItems}
				overflowButtonProps={overflowProps}
				farItems={transFarItems}
				ariaLabel={t('contacts.toolbar.aria-label')}
			/>
		</div>
	);
};

export const Toolbar = withTranslation()(ToolbarComponent);
