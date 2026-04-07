import { ICommandBarItemProps } from '@fluentui/react';
import { TFunction } from 'i18next';

export const translateItems =
	(t: TFunction) =>
	(items: ICommandBarItemProps[]): ICommandBarItemProps[] => {
		return items.map((item: ICommandBarItemProps) => {
			item = translate(t)(item);

			if (item.subMenuProps) {
				const subs = item.subMenuProps.items;
				const updateSubs = subs.map(translate(t));

				item.items = updateSubs;
			}

			return item;
		});
	};

const translate = (t: TFunction) => (item: ICommandBarItemProps) => {
	if (item.key != null) {
		item.text = t(item.key);
	}

	return item;
};
