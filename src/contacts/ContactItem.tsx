import React, { useState } from 'react';
import { Contact } from './Contact';
import { FontIcon } from '@fluentui/react';
import { classNames } from './styles';
import { useTranslation } from 'react-i18next';
import { Contact as Model } from './state';
import { useSelectionStore } from './state';

export type ViewMode = 'list' | 'grid';

export interface ContactItemProps {
	contact: Model;
	viewMode?: ViewMode;
}

export const ContactItem: React.FC<ContactItemProps> = (props) => {
	const { t } = useTranslation();
	const {
		edit,
		handleEditClick,
		contact,
		contact: {
			id,
			firstname,
			lastname,
			picture,
			company,
			address,
			phoneNumber,
			email,
		},
	} = useContactItem(props);
	const viewMode = props.viewMode ?? 'list';
	const { isSelected, toggleSelect } = useSelectionStore();
	const selected = isSelected(id as string);

	if (edit) {
		return (
			<div
				className={`${classNames.editContact} contact-card--full-width`}
			>
				<div className={classNames.contact}>
					<Contact contact={contact} />
				</div>
				<div className={classNames.close}>
					<button
						className="btn-icon"
						onClick={handleEditClick}
						aria-label={t('contacts.menu.main.close')}
					>
						<FontIcon
							iconName="ChromeClose"
							className={classNames.icon}
						/>
					</button>
				</div>
			</div>
		);
	}

	const initials = `${firstname[0] ?? ''}${lastname[0] ?? ''}`.toUpperCase();
	const fullName = `${firstname} ${lastname}`;

	if (viewMode === 'grid') {
		return (
			<div
				className={`contact-card contact-card--grid${
					selected ? ' is-selected' : ''
				}`}
			>
				{/* Selection checkbox — top-left */}
				<input
					type="checkbox"
					className="contact-checkbox contact-checkbox--grid"
					checked={selected}
					onChange={() => toggleSelect(id as string)}
					aria-label={`Select ${fullName}`}
					onClick={(e) => e.stopPropagation()}
				/>
				{/* Edit button — top-right */}
				<button
					className="btn-icon contact-card__edit-btn"
					onClick={handleEditClick}
					aria-label={t('contacts.contacts.edit')}
				>
					<FontIcon iconName="Edit" className={classNames.icon} />
				</button>
				<div className="contact-card__avatar-wrap">
					{picture ? (
						<img
							src={picture}
							alt={t('contacts.contacts.avatar.alt')}
							className="avatar avatar--lg"
						/>
					) : (
						<div
							className="avatar-initials avatar-initials--lg"
							aria-hidden="true"
						>
							{initials}
						</div>
					)}
				</div>
				<div className="contact-card__body">
					<span className="contact-name">{fullName}</span>
					<span className="contact-meta">{email}</span>
					{company && <span className="contact-meta">{company}</span>}
					{phoneNumber && (
						<span className="contact-meta">{phoneNumber}</span>
					)}
					{address && (
						<span className="contact-meta contact-card__detail">
							{address}
						</span>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className={`contact-card${selected ? ' is-selected' : ''}`}>
			{/* Selection checkbox — left edge */}
			<input
				type="checkbox"
				className="contact-checkbox"
				checked={selected}
				onChange={() => toggleSelect(id as string)}
				aria-label={`Select ${fullName}`}
				onClick={(e) => e.stopPropagation()}
			/>
			<div>
				{picture ? (
					<img
						src={picture}
						alt={t('contacts.contacts.avatar.alt')}
						className="avatar"
					/>
				) : (
					<div className="avatar-initials" aria-hidden="true">
						{initials}
					</div>
				)}
			</div>
			<div className="contact-card__info">
				<span className="contact-name">{fullName}</span>
				<div className="contact-card__meta">
					<span className="contact-meta">{email}</span>
					{phoneNumber && (
						<span className="contact-meta contact-card__detail">
							{phoneNumber}
						</span>
					)}
					{company && (
						<span className="contact-meta contact-card__detail">
							{company}
						</span>
					)}
					{address && (
						<span className="contact-meta contact-card__detail">
							{address}
						</span>
					)}
				</div>
			</div>
			<button
				className="btn-icon"
				onClick={handleEditClick}
				aria-label={t('contacts.contacts.edit')}
			>
				<FontIcon iconName="Edit" className={classNames.icon} />
			</button>
		</div>
	);
};

export const useContactItem = ({ contact }: ContactItemProps) => {
	const [edit, setEdit] = useState(false);
	const handleEditClick = () => setEdit(!edit);

	return { edit, handleEditClick, contact };
};
