import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface stateLoaderLanguage {
	isOpen: boolean
}

const initialState: stateLoaderLanguage = {
	isOpen: false,
};

export const stateLoaderLanguage = createSlice({
	name: 'state-modal-loading',
	initialState,
	reducers: {
		openModalLoading: (state) => {
			state.isOpen = true;
		},
		closeModalLoading: (state) => {
			state.isOpen = false;
		}
	},
});

export const { openModalLoading, closeModalLoading } = stateLoaderLanguage.actions;

export const selectCount = (state: RootState) => state.stateLoaderLanguage.isOpen;

export default stateLoaderLanguage.reducer;