import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactsService, Contact as Model } from './state';

interface ContactFormError {
	email?: string;
}

export interface ContactProps {
	contact: Model;
}

export const Contact: React.FC<ContactProps> = props => {
	const { t } = useTranslation();
	const { contactId, initialValues } = useContact(props);
	return (
		<>
			<h3>{t('contacts.contacts.add-contact')}</h3>
			<Formik
				initialValues={initialValues}
				validate={values => {
					const errors: ContactFormError = {};
					if (!values.email) {
						errors.email = t('contacts.contacts.email.required');
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = t('contacts.contacts.email.invalid');
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						setSubmitting(true);
						if (contactId === undefined) {
							contactsService.add(values);
						} else {
							contactsService.update(contactId, values);
						}
					}, 400);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div>
							<label htmlFor="firstname">{t('contacts.contacts.firstname')}</label>
							<Field
								type="text"
								name="firstname"
								placeholder={t('contacts.contacts.firstname')}
							/>
						</div>
						<div>
							<label htmlFor="lastname">{t('contacts.contacts.lastname')}</label>
							<Field
								type="text"
								name="lastname"
								placeholder={t('contacts.contacts.lastname')}
							/>
						</div>
						<div>
							<label htmlFor="email">{t('contacts.contacts.email')}</label>
							<Field
								type="email"
								name="email"
								placeholder="alex.dimitrov@email.com"
							/>
							<ErrorMessage name="email" component="div" />
						</div>
						<div>
							<label htmlFor="phoneNumber">
								{t('contacts.contacts.phoneNumber')}
							</label>
							<Field type="text" name="phoneNumber" placeholder="+49353535353535" />
						</div>
						<div>
							<label htmlFor="company">{t('contacts.contacts.company')}</label>
							<Field type="text" name="company" placeholder="LinkedIn Corporation" />
						</div>
						<div>
							<label htmlFor="address">{t('contacts.contacts.address')}</label>
							<Field type="text" name="address" placeholder="80333 Munich" />
						</div>
						<button type="submit" disabled={isSubmitting}>
							{t('contacts.contacts.submit')}
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export const useContact = ({ contact }: ContactProps) => {
	let contactId: string | number | undefined;
	let initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		picture: '',
		company: '',
		address: '',
		phoneNumber: ''
	};
	if (typeof contact !== 'undefined') {
		const { id, firstname, lastname, email, picture, company, address, phoneNumber } = contact;
		contactId = id;

		initialValues = {
			firstname,
			lastname,
			email,
			picture: picture ? picture : '',
			company: company ? company : '',
			address: address ? address : '',
			phoneNumber
		};
	}

	return {
		contactId,
		initialValues
	};
};
