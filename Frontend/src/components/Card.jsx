import React from 'react'
import audio from "../Assets/media/testing.mp3"
const audio1 = new Audio( audio )
const Card = ( { data } ) => {
    return (
        <div className='inline-block'>
            <div className=" card hidden group w-36 sm:flex flex-col gap-3  m-2 bg-[#282828] hover:bg-neutral-700 p-2 rounded-lg  ">
                <div className="cover relative h-32 w-32 overflow-hidden">
                    <img className='rounded-lg' src={ data } alt="cover" />
                    <div className="absolute -bottom-10  group-hover:bottom-1  bg-green-500 py-1.5 px-3 rounded-full right-1 
                    transition-all duration-200 ease-in-out hover:scale-105" onClick={ () => {
                            audio1.play();
                        } }>
                        <i className="fa-solid fa-play text-black"></i>
                    </div>
                </div>
                <div className="card-content text-sm leading-5">
                    <h4> The Singless</h4>
                    <p className='truncate text-xs ' >Listen to singles now, including Supermassive black hole</p>
                </div>
            </div>
            {/* card for Mobile */ }
            <div className="w-36 m-2 px-1 py-1.5 hover:bg-zinc-800 flex sm:hidden flex-col items-center rounded-lg ">
                <div className="cover relative h-32 w-32 overflow-hidden">
                    <img className='rounded-lg' src="https://media.pitchfork.com/photos/5c7d593e3a5a154e7b62f576/1:1/w_600/Dido_StillOnMyMind.jpg" alt="cover" />
                </div>
                <div className="card-content text-sm">
                    <h4> The Singless</h4>
                </div>
            </div>
        </div>
    )
}

export default Card