import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
	it('renders language select dropdown', () => {
		render(<LanguageSelector />);
		expect(screen.getByRole('combobox')).toBeInTheDocument();
	});

	it('renders default language as selected', () => {
		render(<LanguageSelector />);
		const select = screen.getByRole('combobox') as HTMLSelectElement;
		expect(select.value).toBe('en');
	});

	it('renders all supported language options', () => {
		render(<LanguageSelector />);
		const select = screen.getByRole('combobox') as HTMLSelectElement;
		expect(select.options.length).toBeGreaterThan(0);
	});

	it('changes selected language on change', () => {
		render(<LanguageSelector />);
		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: 'de' } });
		expect((select as HTMLSelectElement).value).toBe('de');
	});
});
