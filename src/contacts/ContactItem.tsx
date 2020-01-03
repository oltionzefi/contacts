import React, { useState } from 'react';
import { Contact as Model } from './state';
import { TFunction } from 'i18next';
import { Contact } from './Contact';

export const ContactItem: React.SFC<{ contact: Model } & { tFunction: TFunction }> = (
	props: { contact: Model } & { tFunction: TFunction }
) => {
	const { firstname, lastname, email, picture, company, address, phoneNumber } = props.contact;
	const t = props.tFunction;
	const [edit, setEdit] = useState(false);
	const handleEditClick = () => {
		setEdit(true);
	};

	if (edit) {
		return <Contact contact={props.contact} />;
	}
	return (
		<div className="collection-item avatar">
			<div>
				{picture ? <img src={picture} alt="Cover for contact" className="circle" /> : ''}
			</div>
			<div>
				<span className="title">{firstname + ' ' + lastname}</span>
			</div>
			<div>
				<p>{email}</p>
			</div>
			<div>{phoneNumber ? <span>{phoneNumber}</span> : ''}</div>
			<div>{company ? <span>{company}</span> : ''}</div>
			<div>{address ? <span>{address}</span> : ''}</div>
			<div>
				<button className="secondary-content">
					<i className="material-icons" onClick={handleEditClick}>
						{t('contacts.contacts.edit')}
					</i>
				</button>
			</div>
		</div>
	);
};
