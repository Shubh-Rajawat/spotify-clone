import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../redux/songslice';
import baseUrl from '../BaseUrl';
import { nowPlayingActions } from '../redux/nowplayingSlice';

const Card = ( { data, img } ) => {
    const { nowPlaying } = useSelector( ( state ) => state.nowPlaying );
    const { currentSong } = useSelector( ( state ) => state.song );
    const dispatch = useDispatch();
    const [ audio, setAudio ] = useState( new Audio( `${ baseUrl }${ data?.audio_url }` ) );
    const [ isPlaying, setIsPlaying ] = useState( false );

    const settingCurrentSong = ( songId ) => {
        dispatch( songActions.setCurrentSong( songId ) );
    };

    const handlePlayClick = () => {
        if ( isPlaying ) {
            audio.pause();
            setIsPlaying( false );
            dispatch( nowPlayingActions.toggleNowPlaying( false ) );

        } else {
            // Pause the currently playing audio (if any)
            if ( currentSong !== data?._id ) {
                dispatch( songActions.setCurrentSong( data?._id ) );
                // Pause the currently playing audio if it's different
                if ( audio !== null ) {
                    audio.pause();
                }
            }
            audio.play();
            setIsPlaying( true );
            dispatch( nowPlayingActions.toggleNowPlaying( true ) );

        }
    };

    useEffect( () => {
        if ( currentSong !== data?._id && isPlaying ) {
            audio.pause();
            setIsPlaying( false );
            dispatch( nowPlayingActions.toggleNowPlaying( false ) );
        }
    }, [ currentSong, data?._id, isPlaying, audio ] );

    return (
        <div className='inline-block'>
            <div className=" card hidden group w-36 sm:flex flex-col gap-3  m-2 bg-[#282828] hover:bg-neutral-700 p-2 rounded-lg">
                <div className="cover relative h-32 w-32 overflow-hidden">
                    <img className='rounded-lg' src={ img } alt="cover" />
                    <div className="absolute -bottom-10  group-hover:bottom-1  bg-green-500 py-1.5 px-3 rounded-full right-1 
                    transition-all duration-200 ease-in-out hover:scale-105 shadow-sm shadow-neutral-700 opacity-90" onClick={ () => {
                            handlePlayClick()
                        } }>
                        <i className={ `fa-solid fa-${ isPlaying ? 'pause' : 'play' } text-black` }></i>
                    </div>
                </div>
                <div className="card-content text-sm leading-5">
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
        </div>
    )
}

export default Card;