import React, { useState } from 'react';
import { Contact as Model } from './state';
import { Contact } from './Contact';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { classNames } from './styles';
import { WithTranslation } from 'react-i18next';

export const ContactItem: React.FC<{ contact: Model } & WithTranslation> = (
	props: { contact: Model } & WithTranslation
) => {
	const { t } = props;
	const { firstname, lastname, email, picture, company, address, phoneNumber } = props.contact;
	const [edit, setEdit] = useState(false);
	const handleEditClick = () => {
		setEdit(!edit);
	};

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
				{picture ? (
					<img src={picture} alt={t('contacts.contacts.avatar.alt')} className="circle" />
				) : (
					''
				)}
			</div>
			<div className={classNames.name}>
				<span className="title">{firstname + ' ' + lastname}</span>
			</div>
			<div className={classNames.email}>{email}</div>
			<div className={classNames.details}>
				<div>{phoneNumber ? <span>{phoneNumber}</span> : ''}</div>
				<div>{company ? <span>{company}</span> : ''}</div>
				<div>{address ? <span>{address}</span> : ''}</div>
			</div>
			<div>
				<FontIcon iconName="Edit" className={classNames.icon} onClick={handleEditClick} />
			</div>
		</div>
	);
};
