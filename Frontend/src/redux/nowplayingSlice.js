import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice( {
    name: "now playing",
    initialState: {
        nowPlaying: false,
        playingAudio: null,
    },
    reducers: {
        toggleNowPlaying: ( state, action ) => {
            state.nowPlaying = action.payload
        },
        setPlayingAudio: ( state, action ) => {
            console.log( "hell", action.payload )
            state.playingAudio = action.payload;
        },
    }
} )

export const nowPlayingActions = nowPlayingSlice.actions

const nowPlayingReducer = nowPlayingSlice.reducer

export default nowPlayingReducer;