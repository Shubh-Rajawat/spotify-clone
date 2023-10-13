import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nowPlayingActions } from '../../redux/nowplayingSlice';


const RightSongActions = () => {
    const { showNowplaying } = useSelector( ( state ) => state.nowPlaying );
    const dispatch = useDispatch();
    // console.log( showNowplaying, "nowplay" );
    return (
        <div className="song-actions mb-7">
            <div className="controls-right song-actions">
                <div className="">
                    <i
                        className="fa-solid fa-headphones mx-3 cursor-pointer text-neutral-600 hover:text-white"
                        title="Now playing"
                        onClick={ () => dispatch( nowPlayingActions.toggleNowPlaying() ) }
                    ></i>
                    <i
                        className="fa-solid fa-microphone mx-3 cursor-pointer text-neutral-600 hover:text-white"
                        title="Lyrics"
                    ></i>
                    <i
                        className="fa-solid fa-grip-lines mx-3 cursor-pointer text-neutral-600 hover:text-white"
                        title="Queue"
                    ></i>
                    <i
                        className="fa-solid fa-mobile mx-3 cursor-pointer text-neutral-600 hover:text-white"
                        title="Connect to a device"
                    ></i>
                    <i className="fa-solid fa-volume-off mx-3 cursor-pointer text-neutral-600 hover:text-white"></i>
                    {/* <i class="fa-solid fa-volume-low mx-3 cursor-pointer text-neutral-600 hover:text-white"></i>
                    <i class="fa-solid fa-volume-high mx-3 cursor-pointer text-neutral-600 hover:text-white"></i>
                    <i class="fa-solid fa-volume-xmark mx-3 cursor-pointer text-neutral-600 hover:text-white"></i> */}
                </div>
            </div>
        </div>
    )
}

export default RightSongActions