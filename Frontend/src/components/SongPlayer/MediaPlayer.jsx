import React from 'react'
import Player from './Player'
import CurrentSong from './CurrentSong'
import RightSongActions from './RightSongActions'
import { useSelector } from 'react-redux'

const MediaPlayer = () => {
    const { currentSong } = useSelector( ( state ) =>
        state.song
    )
    // console.log( currentSong )
    return (
        <>
            <div className='fixed hidden bottom-0 w-full px-6 pt-2 sm:flex justify-between items-end bg-black'>
                <CurrentSong />
                <Player />
                <RightSongActions />
            </div>
            {/* for mobile */ }
            <div className="song sm:hidden flex mb-5 justify-around items-center relative bg-red-300">
                <div className='flex items-center'>
                    <div className="songimg w-10">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className='w-full' />
                    </div>
                    <div className="songname">
                        <p className="text-sm w-full overflow-hidden truncate">Yaar bathere(yo yo honey singh)</p>
                        <p className="text-xs text-neutral-400"><a href="" target="_blank" rel="noopener noreferrer">
                            honey singh
                        </a></p>
                    </div>
                </div>
                <div className="songact flex gap-2 items-center">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-images"></i>
                </div>
            </div>

        </>
    )
}

export default MediaPlayer;