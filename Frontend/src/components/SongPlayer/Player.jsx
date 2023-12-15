import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nowPlayingActions } from '../../redux/nowplayingSlice';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import baseUrl from '../../BaseUrl';

const Player = () => {

    const { currentSong } = useSelector( ( state ) => state.song );

    const dispatch = useDispatch();
    const songRef = useRef()
    return (
        <AudioPlayer
            ref={ songRef }
            autoPlay
            src={ `${ baseUrl }${ currentSong?.audio_url }` }
            play={ true }
            onPlay={ e => {
                console.log( "song-ref", songRef.current )
                songRef.current.audio.current.play();

            } }
            onPause={ () => {
                songRef.current.audio.current.pause();
            } }
            onPlayError={ e => {
                // console.log( "onPlayErrorrrrrr", e )
                console.log( 'playingAudio::--', currentSong );
            } }
            style={ {
                width: '1000px',
                backgroundColor: 'transparent',
                color: "white"
            } }
        />
    )
}

export default Player

// custom player component:----

// < div className = "player w-1/3 flex flex-col" >
//         <div className="upper flex justify-around w-1/2 mx-auto items-center">
//             <div className="shuffle text-neutral-600 hover:text-white">
//                 <i className="fa-solid fa-shuffle"></i>
//             </div>
//             <div className="previous text-neutral-600 hover:text-white">
//                 <i className="fa-solid fa-backward-step"></i>
//             </div>
//             <div className="play-pause bg-white text-black rounded-full text-md py-1.5 ps-3 pe-3
//              hover:scale-105 text-center"
//                 onClick={ () => {
//                     if ( nowPlaying ) {
//                         playingAudio.pause();
//                         dispatch( nowPlayingActions.toggleNowPlaying( false ) );
//                         console.log( "paused" );
//                     } else {
//                         playingAudio.play();
//                         dispatch( nowPlayingActions.toggleNowPlaying( true ) );
//                         console.log( "played" );
//                     }
//                 } }
//             >
//                 <i className={ `fa-solid fa-${ nowPlaying ? 'pause' : 'play' }` }></i>
//             </div>
//             <div className="next text-neutral-600 hover:text-white">
//                 <i className="fa-solid fa-forward-step"></i>
//             </div>
//             <div className="repeat text-neutral-600 hover:text-white">
//                 <i className="fa-solid fa-repeat"></i>
//             </div>
//         </div>
//         <div className="playing py-4 w-full flex items-center gap-2">
//             <span className='text-xs text-zinc-300' >1.26</span>
//             <div className="h-1 group w-full bg-neutral-200 dark:bg-neutral-600">
//                 <div className={ `h-1 bg-white group-hover:bg-green-400 w-[25%]` } ></div>
//             </div>
//             <span className='text-xs text-zinc-300' >3.00</span>
//         </div>
//     </div >