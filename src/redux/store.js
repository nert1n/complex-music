import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import playlistsSlice from './slices/playlistsSlice'
import currentTrackSlice from './slices/currentTrackSlice'
import tracksSlice from './slices/tracksSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        playlists: playlistsSlice,
        currentTrack: currentTrackSlice,
        tracks: tracksSlice,
    },
})
