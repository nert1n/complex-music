import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    name: '',
    creators: '',
    liked: false,
    img: '',
    src: '',
}

export const currentTrackSlice = createSlice({
    name: 'currentTrack',
    initialState,
    reducers: {
        syncState: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.creators = action.payload.creators
            state.img = action.payload.img
            state.src = action.payload.src
            state.liked = action.payload.liked
        },
    },
})

export const { syncState } = currentTrackSlice.actions

export default currentTrackSlice.reducer