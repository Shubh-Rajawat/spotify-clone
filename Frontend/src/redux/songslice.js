import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice( {
    name: "songSlice",
    initialState: {
        currentSong: null,
    },
    reducers: {
        setCurrentSong: ( state, action ) => {
            state.currentSong = action.payload;
        },
    }
} );

export const songActions = songSlice.actions;
const songReducer = songSlice.reducer;
export default songReducer;