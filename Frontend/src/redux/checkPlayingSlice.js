import { createSlice } from "@reduxjs/toolkit";

const checkPlayingSlice = createSlice( {
    name: "check-playing",
    initialState: {
        checkPlaying: false,
    },
    reducers: {
        togglecheckPlaying: ( state, action ) => {
            state.checkPlaying = !state.checkPlaying
        }
    }
} )

export const checkPlayingActions = checkPlayingSlice.actions

const checkPlayingReducer = checkPlayingSlice.reducer

export default checkPlayingReducer; 