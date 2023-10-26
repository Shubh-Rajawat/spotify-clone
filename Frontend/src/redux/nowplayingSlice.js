import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice( {
    name: "now playing",
    initialState: {
        nowPlaying: false,
    },
    reducers: {
        toggleNowPlaying: ( state, action ) => {
            state.nowPlaying = action.payload
        }
    }
} )

export const nowPlayingActions = nowPlayingSlice.actions

const nowPlayingReducer = nowPlayingSlice.reducer

export default nowPlayingReducer;