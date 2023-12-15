import React from 'react'
import { useSelector } from 'react-redux';
import logo from "../../Assets/media/white-logo.svg"
import baseUrl from '../../BaseUrl';

const CurrentSong = () => {

    const { currentSong } = useSelector( ( state ) => state.song );
    console.log( "CurrentSong componono", currentSong )
    return (
        <>

            <div className="song hidden lg:flex mb-5 gap-3 items-center">
                <div className="flex items-center gap-3">
                    <div className="songimg w-10">
                        <img src={ currentSong?.image ? `${ baseUrl }${ currentSong?.image }` : logo } alt="" className='w-full' />
                    </div>
                    <div className="songname">
                        <p className="text-sm w-full overflow-hidden truncate">{ currentSong ? currentSong?.title : "No song selected" }</p>
                        <p className="text-xs text-neutral-400"><a href="" target="_blank" rel="noopener noreferrer">
                            { currentSong?.genre }
                        </a></p>
                    </div>
                </div>
                <div className="songact flex gap-2 items-center">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-images"></i>
                </div>
            </div>
            <SmallCurrentSong />
        </>
    )
}

const SmallCurrentSong = () => {
    const { currentSong } = useSelector( ( state ) => state.song );
    return (
        <div className="song flex mb-5 gap-3 items-center lg:hidden">
            <div className="songimg w-10">
                <img src={ currentSong?.image ? `${ baseUrl }${ currentSong?.image }` : logo } alt="" className='w-full' />
            </div>
            <div className="songact flex gap-2 items-center">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-images"></i>
            </div>
        </div>
    )
}

export default CurrentSong;