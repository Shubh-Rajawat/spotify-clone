import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../redux/songslice';
import baseUrl from '../BaseUrl';
import { nowPlayingActions } from '../redux/nowplayingSlice';


const Card = ( { data, img } ) => {
    const { nowPlaying, playingAudio } = useSelector( ( state ) => state.nowPlaying );
    const { currentSong } = useSelector( ( state ) => state.song );
    const dispatch = useDispatch();
    const [ audio, setAudio ] = useState( new Audio( `${ baseUrl }${ data?.audio_url }` ) );
    const [ isPlaying, setIsPlaying ] = useState( false );

    const handlePlayClick = () => {
        dispatch( songActions.setCurrentSong( data ) );
        // if ( isPlaying && nowPlaying ) {
        //     audio.pause();
        //     setIsPlaying( false );
        //     dispatch( nowPlayingActions.toggleNowPlaying( false ) );
        // } else {
        //     // Pause the currently playing audio (if any)
        //     if ( currentSong?._id !== data?._id ) {
        //         dispatch( songActions.setCurrentSong( data ) );
        //         dispatch( nowPlayingActions.setPlayingAudio( audio ) )
        //         dispatch( nowPlayingActions.toggleNowPlaying( false ) );
        //         // Pause the currently playing audio if it's different
        //         if ( audio !== null ) {
        //             audio.pause();
        //         }
        //     }
        //     audio.play();
        //     setIsPlaying( true );
        //     dispatch( nowPlayingActions.toggleNowPlaying( true ) );
        // }
    };
    useEffect( () => {
        // if ( currentSong?._id !== data?._id && isPlaying ) {
        //     audio.pause();
        //     setIsPlaying( false );
        //     dispatch( nowPlayingActions.toggleNowPlaying( false ) );
        // }
    }, [ currentSong, data?._id, isPlaying, audio ] );

    return (
        <div className=' inline-block'>
            <div className=" card relative hidden group w-36 sm:flex flex-col gap-3  m-2 bg-[#282828] hover:bg-neutral-700 p-2 rounded-lg"
                onClick={ () => {
                    handlePlayClick()
                } }
            >
                { currentSong?._id == data?._id &&
                    < div className="absolute z-10 h-3 w-3 top-0.5 animate-pulse  bg-green-400  rounded-full right-1
                shadow-sm shadow-neutral-700 opacity-90" onClick={ () => {
                            handlePlayClick()
                        } }>
                        &nbsp;
                    </div> }
                <div className="cover relative h-32 w-32 overflow-hidden">
                    <img className='rounded-lg' src={ img } alt="cover" />
                </div>
                <div className="card-content text-sm leading-5 truncate">
                    <h4>{ data?.title }</h4>
                    {/* <p className='truncate text-xs'>Listen to singles now, including Supermassive black hole</p> */ }
                    <p className='truncate text-xs'>{ data?.desc }</p>
                </div>
            </div>
            {/* card for Mobile */ }
            <div className="w-36 sm:mx-2 my-2 px-1 py-1.5 hover:bg-zinc-800 flex sm:hidden flex-col items-center rounded-lg ">
                <div className="cover relative h-32 w-32 overflow-hidden">
                    <img className='rounded-lg' src={ img } alt="cover" />
                </div>
                <div className="card-content text-sm">
                    <h4>{ data?.title }</h4>
                </div>
            </div>
        </div >
    )
}

export default Card;