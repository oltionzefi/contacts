export const defaultLocale = 'en';

export async function loadMessages(language: string) {
	return await import(`@lingui/loader!../locales/${language}/messages.po`);
}
