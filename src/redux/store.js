import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import playlistsSlice from './slices/playlistsSlice';
import tracksSlice from './slices/tracksSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        playlists: playlistsSlice,
        tracks: tracksSlice,
    },
})