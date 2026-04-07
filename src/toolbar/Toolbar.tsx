import React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { IButtonProps } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { translateItems } from '../utils';
import { useSelectionStore } from '../contacts/state';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const Toolbar: React.FC = () => {
	const { t } = useTranslation();
	const selectedIds = useSelectionStore((state) => state.selectedIds);
	const hasSelection = selectedIds.length > 0;

	const toolbarItems: ICommandBarItemProps[] = [
		{
			text: 'Contacts',
			key: 'contacts.menu.main.home',
			iconProps: { iconName: 'BulletedList' },
			href: '/',
		},
		{
			text: 'New',
			key: 'contacts.menu.main.new',
			cacheKey: 'newContact',
			iconProps: { iconName: 'Add' },
			href: 'new',
		},
		{
			text: 'Upload',
			key: 'contacts.menu.main.upload',
			iconProps: { iconName: 'Upload' },
			href: 'upload',
		},
		{
			text: 'Share',
			key: 'contacts.menu.main.share',
			iconProps: { iconName: 'Share' },
			disabled: !hasSelection,
			onClick: () => console.log('Share', selectedIds),
		},
		{
			text: 'Download',
			key: 'contacts.menu.main.download',
			iconProps: { iconName: 'Download' },
			disabled: !hasSelection,
			onClick: () => console.log('Download', selectedIds),
		},
	];

	const overflowItems: ICommandBarItemProps[] = [
		{
			text: 'Move to...',
			key: 'contacts.menu.main.move',
			disabled: !hasSelection,
			onClick: () => console.log('Move to', selectedIds),
			iconProps: { iconName: 'MoveToFolder' },
		},
		{
			text: 'Copy to...',
			key: 'contacts.menu.main.copy',
			disabled: !hasSelection,
			onClick: () => console.log('Copy to', selectedIds),
			iconProps: { iconName: 'Copy' },
		},
	];

	return (
		<>
			<CommandBar
				items={translateItems(t)(toolbarItems)}
				overflowItems={translateItems(t)(overflowItems)}
				overflowButtonProps={overflowProps}
				farItems={[]}
				ariaLabel={t('contacts.toolbar.aria-label')}
			/>
		</>
	);
};
