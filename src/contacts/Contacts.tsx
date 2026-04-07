import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Contact, useContactsStore } from './state';
import { ContactItem, ViewMode } from './ContactItem';
import { FontIcon, Announced } from '@fluentui/react';
import { classNames } from './styles';

const PAGE_SIZE = 20;

/* ─── Icons ─── */
const SearchIcon: React.FC = () => (
	<svg
		className="search-field__icon"
		viewBox="0 0 20 20"
		fill="none"
		aria-hidden="true"
		focusable="false"
	>
		<circle
			cx="8.5"
			cy="8.5"
			r="5.5"
			stroke="currentColor"
			strokeWidth="1.75"
		/>
		<path
			d="M13 13l3.5 3.5"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
		/>
	</svg>
);

const ClearIcon: React.FC = () => (
	<svg
		viewBox="0 0 16 16"
		fill="none"
		aria-hidden="true"
		focusable="false"
		width="14"
		height="14"
	>
		<path
			d="M2 2l12 12M14 2L2 14"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
		/>
	</svg>
);

const ListViewIcon: React.FC = () => (
	<svg
		viewBox="0 0 16 16"
		fill="none"
		aria-hidden="true"
		focusable="false"
		width="16"
		height="16"
	>
		<rect x="1" y="2" width="14" height="2.5" rx="1" fill="currentColor" />
		<rect
			x="1"
			y="6.75"
			width="14"
			height="2.5"
			rx="1"
			fill="currentColor"
		/>
		<rect
			x="1"
			y="11.5"
			width="14"
			height="2.5"
			rx="1"
			fill="currentColor"
		/>
	</svg>
);

const GridViewIcon: React.FC = () => (
	<svg
		viewBox="0 0 16 16"
		fill="none"
		aria-hidden="true"
		focusable="false"
		width="16"
		height="16"
	>
		<rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
		<rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
		<rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
		<rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
	</svg>
);

/* ─── Infinite scroll sentinel ─── */
const useInfiniteScroll = (
	items: Contact[],
	filterName: string | undefined,
) => {
	// Track the filter alongside count so we can reset atomically during render
	const [{ visibleCount, lastFilter }, setScrollState] = useState({
		visibleCount: PAGE_SIZE,
		lastFilter: filterName,
	});
	const sentinelRef = useRef<HTMLDivElement>(null);

	// Adjusting state while rendering — React-recommended pattern for derived resets
	if (lastFilter !== filterName) {
		setScrollState({ visibleCount: PAGE_SIZE, lastFilter: filterName });
	}

	const loadMore = useCallback(() => {
		setScrollState((prev) => ({
			...prev,
			visibleCount: Math.min(
				prev.visibleCount + PAGE_SIZE,
				items.length + PAGE_SIZE,
			),
		}));
	}, [items.length]);

	useEffect(() => {
		const el = sentinelRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) loadMore();
			},
			{ threshold: 0, rootMargin: '120px' },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [loadMore]);

	return {
		visibleContacts: items.slice(0, visibleCount),
		hasMore: items.length > visibleCount,
		sentinelRef,
	};
};

/* ─── Component ─── */
export const Contacts: React.FC = () => {
	const { t } = useTranslation();
	const { contacts, filterName, setFilter, viewMode, setViewMode } =
		useContacts();
	const { visibleContacts, hasMore, sentinelRef } = useInfiniteScroll(
		contacts,
		filterName,
	);

	const collectionClass =
		viewMode === 'grid'
			? `${classNames.collections} contacts-grid`
			: classNames.collections;

	return (
		<div className={classNames.wrapper}>
			<div className="contacts-header">
				<h2 className="page-title">
					{t('contacts.contacts.placeholder')}
				</h2>
				<div
					className="view-toggle"
					role="group"
					aria-label="View mode"
				>
					<button
						className={`view-toggle__btn${
							viewMode === 'list' ? ' active' : ''
						}`}
						onClick={() => setViewMode('list')}
						aria-pressed={viewMode === 'list'}
						aria-label="List view"
					>
						<ListViewIcon />
					</button>
					<button
						className={`view-toggle__btn${
							viewMode === 'grid' ? ' active' : ''
						}`}
						onClick={() => setViewMode('grid')}
						aria-pressed={viewMode === 'grid'}
						aria-label="Grid view"
					>
						<GridViewIcon />
					</button>
				</div>
			</div>

			<div className="contacts-filter">
				<div className="search-field" role="search">
					<SearchIcon />
					<input
						id="contacts-search"
						type="search"
						className="search-field__input"
						placeholder={t('contacts.contacts.filter.name')}
						value={filterName ?? ''}
						onChange={(e) => setFilter(e.target.value || undefined)}
						aria-label={t('contacts.contacts.filter.name')}
						autoComplete="off"
						spellCheck={false}
					/>
					{filterName && (
						<button
							className="search-field__clear"
							onClick={() => setFilter(undefined)}
							aria-label="Clear search"
							type="button"
						>
							<ClearIcon />
						</button>
					)}
				</div>
				<Announced
					message={`Number of items after filter applied: ${contacts.length}.`}
				/>
			</div>

			<div className={collectionClass}>
				{visibleContacts.length === 0 ? (
					<div className="empty-state">
						<FontIcon
							iconName="People"
							className="empty-state-icon"
						/>
						<p className="empty-state-title">
							{t('contacts.contacts.empty.title')}
						</p>
						<p className="empty-state-description">
							{t('contacts.contacts.empty.description')}
						</p>
					</div>
				) : (
					visibleContacts.map((contact: Contact) => (
						<ContactItem
							key={contact.id}
							contact={contact}
							viewMode={viewMode}
						/>
					))
				)}
			</div>

			{/* Infinite scroll sentinel — triggers next page load when entering viewport */}
			{hasMore && (
				<div
					ref={sentinelRef}
					className="load-more-sentinel"
					aria-hidden="true"
				/>
			)}
		</div>
	);
};

export const useContacts = () => {
	const allContacts = useContactsStore((state) => state.contacts);
	const [filterName, setFilter] = useState<string | undefined>();
	const [viewMode, setViewMode] = useState<ViewMode>('list');

	const contacts = allContacts.filter((c) => {
		if (c.deleted) return false;
		if (filterName) {
			const lower = filterName.toLowerCase();
			return (
				c.firstname.toLowerCase().includes(lower) ||
				c.lastname.toLowerCase().includes(lower)
			);
		}
		return true;
	});

	return { contacts, filterName, setFilter, viewMode, setViewMode };
};
