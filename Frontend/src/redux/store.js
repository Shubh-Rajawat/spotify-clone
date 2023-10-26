import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "./nowplayingSlice";
import songReducer from "./songslice";
import checkPlayingReducer from "./checkPlayingSlice";


const store = configureStore( {
    reducer: {
        nowPlaying: nowPlayingReducer,
        song: songReducer,
        checkPlaying: checkPlayingReducer,
    },
} );

export default store;