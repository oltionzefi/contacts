import React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { WithTranslation, withTranslation } from 'react-i18next';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

const toolbarItems: ICommandBarItemProps[] = [
	{
		key: 'newItem',
		text: 'New',
		cacheKey: 'newContact', // changing this key will invalidate this item's cache
		iconProps: { iconName: 'Add' },
		subMenuProps: {
			items: [
				{
					key: 'emailMessage',
					text: 'Email message',
					iconProps: { iconName: 'Mail' }
				},
				{
					key: 'calendarEvent',
					text: 'Calendar event',
					iconProps: { iconName: 'Calendar' }
				}
			]
		}
	},
	{
		key: 'upload',
		text: 'Upload',
		iconProps: { iconName: 'Upload' },
		onClick: () => console.log('Upload')
	},
	{
		key: 'share',
		text: 'Share',
		iconProps: { iconName: 'Share' },
		onClick: () => console.log('Share')
	},
	{
		key: 'download',
		text: 'Download',
		iconProps: { iconName: 'Download' },
		onClick: () => console.log('Download')
	}
];

const overflowItems: ICommandBarItemProps[] = [
	{
		key: 'move',
		text: 'Move to...',
		onClick: () => console.log('Move to'),
		iconProps: { iconName: 'MoveToFolder' }
	},
	{
		key: 'copy',
		text: 'Copy to...',
		onClick: () => console.log('Copy to'),
		iconProps: { iconName: 'Copy' }
	},
	{
		key: 'rename',
		text: 'Rename...',
		onClick: () => console.log('Rename'),
		iconProps: { iconName: 'Edit' }
	}
];

const farItems: ICommandBarItemProps[] = [
	{
		key: 'tile',
		text: 'Grid view',
		// This needs an ariaLabel since it's icon-only
		ariaLabel: 'Grid view',
		iconOnly: true,
		iconProps: { iconName: 'Tiles' },
		onClick: () => console.log('Tiles')
	},
	{
		key: 'info',
		text: 'Info',
		// This needs an ariaLabel since it's icon-only
		ariaLabel: 'Info',
		iconOnly: true,
		iconProps: { iconName: 'Info' },
		onClick: () => console.log('Info')
	}
];

const ToolbarComponent = (props: WithTranslation) => {
	const { t } = props;
	return (
		<div>
			<CommandBar
				items={toolbarItems}
				overflowItems={overflowItems}
				overflowButtonProps={overflowProps}
				farItems={farItems}
				ariaLabel={t('contacts.toolbar.aria-label')}
			/>
		</div>
	);
};

export const Toolbar = withTranslation()(ToolbarComponent);
