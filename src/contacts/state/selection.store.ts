import { create } from 'zustand';

interface SelectionState {
	selectedIds: string[];
	toggleSelect: (id: string) => void;
	clearSelection: () => void;
	isSelected: (id: string) => boolean;
}

export const useSelectionStore = create<SelectionState>()((set, get) => ({
	selectedIds: [],
	toggleSelect: (id: string) =>
		set((state) => ({
			selectedIds: state.selectedIds.includes(id)
				? state.selectedIds.filter((x) => x !== id)
				: [...state.selectedIds, id],
		})),
	clearSelection: () => set({ selectedIds: [] }),
	isSelected: (id: string) => get().selectedIds.includes(id),
}));
