import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "./nowplayingSlice";


const store = configureStore( {
    reducer: {
        nowPlaying: nowPlayingReducer
    },
} );

export default store;