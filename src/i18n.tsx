export const defaultLocale = 'en';

export async function loadMessages(language: string) {
	return import(`@lingui/loader!../locales/${language}/messages.po`);
}
