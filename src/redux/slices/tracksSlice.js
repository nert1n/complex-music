import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playTrack: false,
    activeTrack: 0,
    tracks: [
        {id: 0, name: 'BRAZILIAN-PHONK', creators: 'Dj Samir, Dj Shazam Beat', liked: false, img: '/img/track-img/BRAZILIAN-PHONK.jpg', src: '/music/BRAZILIAN-PHONK.mp3'},
        {id: 1, name: 'HOJE', creators: 'Dragon Boys, NECROLX, YOUK3IV', liked: false, img: '/img/track-img/HOJE.jpg', src: '/music/HOJE.mp3'},
        {id: 2, name: 'Old Town Road', creators: 'Lil Nas X', liked: false, img: '/img/track-img/old-town-road.jpg', src: '/music/Old Town Road.mp3'},
        {id: 3, name: 'HONEY (ARE U COMING)', creators: 'Måneskin', liked: false, img: '/img/track-img/HONEY (ARE U COMING).jpg', src: '/music/HONEY (ARE U COMING).mp3'},
        {id: 4, name: 'Cello Suite No. 1 in G Major, BWV 1007: I. Prélude', creators: 'Johann Sebastian Bach, Yo-Yo Ma', liked: false, img: '/img/track-img/Cello Suite No. 1 in G Major, BWV 1007 I. Prélude.jpg', src: '/music/Cello Suite No. 1 in G Major, BWV 1007 I. Prélude.mp3'},
    ],
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        isLiked: (state, action) => {
            state.tracks[action.payload].liked = !state.tracks[action.payload].liked
        },
        isActive: (state, action) => {
            state.activeTrack = action.payload
        },
        isPlay: (state, action) => {
            state.playTrack = action.payload
        },
    },
})

export const { isLiked, isActive, isPlay } = tracksSlice.actions

export default tracksSlice.reducer