import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playPlaylist: false,
    activePlaylist: 0,
    playlists: [
        {id: 0, name: 'Playlist 1', creators: 'nert1n', id_track: [1, 2], img: '/img/playlists/BRAZILIAN-PHONK.jpg'},
        {id: 1, name: 'Playlist 2', creators: 'nert1n', id_track: [2, 1], img: '/img/playlists/Cello Suite No. 1 in G Major, BWV 1007 I. Prélude.jpg'},
        {id: 2, name: 'Playlist 3', creators: 'nert1n', id_track: [1, 2], img: '/img/playlists/BRAZILIAN-PHONK.jpg'},
        {id: 3, name: 'Playlist 4', creators: 'nert1n', id_track: [2, 1], img: '/img/playlists/Cello Suite No. 1 in G Major, BWV 1007 I. Prélude.jpg'},
    ],
}

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: {},
})

export const {  } = playlistsSlice.actions

export default playlistsSlice.reducer