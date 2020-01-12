import React, { useState } from 'react';
import { Contact as Model } from './state';
import { Contact } from './Contact';
import { FontIcon } from 'office-ui-fabric-react';
import { classNames } from './styles';
import { WithTranslation } from 'react-i18next';

export const useContactItem = (props: { contact: Model } & WithTranslation) => {
	const { firstname, lastname, email, picture, company, address, phoneNumber } = props.contact;
	const [edit, setEdit] = useState(false);
	const handleEditClick = () => {
		setEdit(!edit);
	};

	return {
		edit,
		handleEditClick,
		contact: {
			firstname,
			lastname,
			email,
			picture,
			company,
			address,
			phoneNumber
		}
	};
};

export const ContactItem: React.SFC<{ contact: Model } & WithTranslation> = (
	props: { contact: Model } & WithTranslation
) => {
	const { t } = props;
	const { edit, handleEditClick, contact } = useContactItem(props);
	if (edit) {
		return (
			<div className={classNames.editContact}>
				<div className={classNames.contact}>
					<Contact contact={props.contact} />
				</div>
				<div className={classNames.close}>
					<FontIcon
						iconName="ChromeClose"
						className={classNames.icon}
						onClick={handleEditClick}
					/>
				</div>
			</div>
		);
	}
	return (
		<div className={classNames.collection}>
			<div className={classNames.avatar}>
				{contact.picture ? (
					<img
						src={contact.picture}
						alt={t('contacts.contacts.avatar.alt')}
						className="circle"
					/>
				) : (
					''
				)}
			</div>
			<div className={classNames.name}>
				<span className="title">{contact.firstname + ' ' + contact.lastname}</span>
			</div>
			<div className={classNames.email}>{contact.email}</div>
			<div className={classNames.details}>
				<div>{contact.phoneNumber ? <span>{contact.phoneNumber}</span> : ''}</div>
				<div>{contact.company ? <span>{contact.company}</span> : ''}</div>
				<div>{contact.address ? <span>{contact.address}</span> : ''}</div>
			</div>
			<div>
				<FontIcon iconName="Edit" className={classNames.icon} onClick={handleEditClick} />
			</div>
		</div>
	);
};
