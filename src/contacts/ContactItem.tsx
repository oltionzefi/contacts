import React, { useState } from 'react';
import { Contact } from './Contact';
import { FontIcon } from 'office-ui-fabric-react';
import { classNames } from './styles';
import { useTranslation } from 'react-i18next';
import { ContactProps } from './Contact';

export const ContactItem: React.SFC<ContactProps> = props => {
	const { t } = useTranslation();
	const {
		edit,
		handleEditClick,
		contact,
		contact: { firstname, lastname, picture, company, address, phoneNumber, email }
	} = useContactItem(props);
	if (edit) {
		return (
			<div className={classNames.editContact}>
				<div className={classNames.contact}>
					<Contact contact={contact} />
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

export const useContactItem = ({ contact }: ContactProps) => {
	const [edit, setEdit] = useState(false);
	const handleEditClick = () => {
		setEdit(!edit);
	};

	return {
		edit,
		handleEditClick,
		contact
	};
};
