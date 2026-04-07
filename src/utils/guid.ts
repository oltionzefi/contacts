export const guid = (): string =>
	typeof crypto !== 'undefined' && crypto.randomUUID
		? crypto.randomUUID()
		: Math.random().toString(36).substring(2) + Date.now().toString(36);
