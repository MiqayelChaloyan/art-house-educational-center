import { configureStore } from '@reduxjs/toolkit';

import stateLoaderLanguage from './stateLoaderLanguage';
import stateModalSlice from './stateModalSlice';

export const store = configureStore({
    reducer: {
        stateModal: stateModalSlice,
        stateLoaderLanguage: stateLoaderLanguage,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch