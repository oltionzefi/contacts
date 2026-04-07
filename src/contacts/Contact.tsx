import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactsService, Contact as Model } from './state';

const contactSchema = z.object({
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	email: z.string().email(),
	phoneNumber: z.string().min(1),
	picture: z.string().optional(),
	company: z.string().optional(),
	address: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactProps {
	contact?: Model;
}

const CloseIcon: React.FC = () => (
	<svg
		viewBox="0 0 16 16"
		fill="none"
		aria-hidden="true"
		focusable="false"
		width="16"
		height="16"
	>
		<path
			d="M2 2l12 12M14 2L2 14"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
		/>
	</svg>
);

export const Contact: React.FC<ContactProps> = (props) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const isNew = props.contact === undefined;
	const { contactId, defaultValues } = useContact(props);
	const [saveSuccess, setSaveSuccess] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues,
	});

	const onSubmit = handleSubmit((values: ContactFormValues) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				if (contactId === undefined) {
					contactsService.add(
						values as Parameters<typeof contactsService.add>[0],
					);
					reset();
				} else {
					contactsService.update(
						contactId,
						values as Parameters<typeof contactsService.update>[1],
					);
				}
				setSaveSuccess(true);
				setTimeout(() => setSaveSuccess(false), 3000);
				resolve();
			}, 400);
		});
	});

	return (
		<div className="contact-form">
			<div className="contact-form__header">
				<h3>{t('contacts.contacts.add-contact')}</h3>
				{isNew && (
					<button
						type="button"
						className="btn-icon"
						onClick={() => navigate(-1)}
						aria-label={t('contacts.menu.main.close')}
					>
						<CloseIcon />
					</button>
				)}
			</div>
			{saveSuccess && (
				<div className="form-success" role="status">
					{t('contacts.contacts.submit.success')}
				</div>
			)}
			<form onSubmit={onSubmit} noValidate>
				<div className="form-field">
					<label htmlFor="firstname" className="form-label required">
						{t('contacts.contacts.firstname')}
					</label>
					<input
						id="firstname"
						type="text"
						className={`form-input${
							errors.firstname ? ' error' : ''
						}`}
						placeholder={t('contacts.contacts.firstname')}
						{...register('firstname')}
					/>
					{errors.firstname && (
						<span className="form-error" role="alert">
							{t('contacts.contacts.firstname.required')}
						</span>
					)}
				</div>
				<div className="form-field">
					<label htmlFor="lastname" className="form-label required">
						{t('contacts.contacts.lastname')}
					</label>
					<input
						id="lastname"
						type="text"
						className={`form-input${
							errors.lastname ? ' error' : ''
						}`}
						placeholder={t('contacts.contacts.lastname')}
						{...register('lastname')}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="email" className="form-label required">
						{t('contacts.contacts.email')}
					</label>
					<input
						id="email"
						type="email"
						className={`form-input${errors.email ? ' error' : ''}`}
						placeholder="alex@email.com"
						{...register('email')}
					/>
					{errors.email && (
						<span className="form-error" role="alert">
							{t('contacts.contacts.email.invalid')}
						</span>
					)}
				</div>
				<div className="form-field">
					<label
						htmlFor="phoneNumber"
						className="form-label required"
					>
						{t('contacts.contacts.phoneNumber')}
					</label>
					<input
						id="phoneNumber"
						type="tel"
						className={`form-input${
							errors.phoneNumber ? ' error' : ''
						}`}
						placeholder="+49 123 456789"
						{...register('phoneNumber')}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="company" className="form-label">
						{t('contacts.contacts.company')}
					</label>
					<input
						id="company"
						type="text"
						className="form-input"
						placeholder="Acme Inc."
						{...register('company')}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="address" className="form-label">
						{t('contacts.contacts.address')}
					</label>
					<input
						id="address"
						type="text"
						className="form-input"
						placeholder="123 Main St"
						{...register('address')}
					/>
				</div>
				<button
					type="submit"
					className="btn-primary"
					disabled={isSubmitting}
					aria-busy={isSubmitting}
				>
					{isSubmitting ? '…' : t('contacts.contacts.submit')}
				</button>
			</form>
		</div>
	);
};

export const useContact = ({ contact }: ContactProps) => {
	let contactId: string | number | undefined;
	let defaultValues: ContactFormValues = {
		firstname: '',
		lastname: '',
		email: '',
		picture: '',
		company: '',
		address: '',
		phoneNumber: '',
	};

	if (contact !== undefined) {
		const {
			id,
			firstname,
			lastname,
			email,
			picture,
			company,
			address,
			phoneNumber,
		} = contact;
		contactId = id;
		defaultValues = {
			firstname,
			lastname,
			email,
			picture: picture ?? '',
			company: company ?? '',
			address: address ?? '',
			phoneNumber,
		};
	}

	return { contactId, defaultValues };
};
