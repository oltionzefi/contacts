import React from 'react';
import { Contact } from './state';
import { TFunction } from 'i18next';

export const ContactItem: React.SFC<{ contact: Contact } & { tFunction: TFunction }> = props => {
	const { firstname, lastname, email, picture, company, address, phoneNumber } = props.contact;
	const t = props.tFunction;
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
					<i className="material-icons" onClick={e => console.log(e)}>
						{t('contacts.contacts.edit')}
					</i>
				</button>
			</div>
		</div>
	);
};
