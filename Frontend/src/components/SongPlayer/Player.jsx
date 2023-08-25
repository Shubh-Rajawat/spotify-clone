import React from 'react'

const Player = () => {
    return (
        <div className="player w-1/3 flex flex-col">
            <div className="upper flex justify-around w-1/2 mx-auto items-center">
                <div className="shuffle text-neutral-600 hover:text-white"             >
                    <i className="fa-solid fa-shuffle"></i>
                </div>
                <div className="previous text-neutral-600 hover:text-white">
                    <i className="fa-solid fa-backward-step"></i>
                </div>
                <div className="play-pause bg-white text-black rounded-full text-md py-1.5 ps-3 pe-3 
                 hover:scale-105 text-center">
                    <i className="fa-solid fa-play "></i>
                </div>
                <div className="next text-neutral-600 hover:text-white">
                    <i className="fa-solid fa-forward-step"></i>
                </div>
                <div className="repeat text-neutral-600 hover:text-white">
                    <i className="fa-solid fa-repeat"></i>
                </div>
            </div>
            <div className="playing py-4 w-full flex items-center gap-2">
                <span className='text-xs text-zinc-300' >1.26</span>
                <div className="h-1 group w-full bg-neutral-200 dark:bg-neutral-600">
                    <div className={ `h-1 bg-white group-hover:bg-green-400 w-[25%]` } ></div>
                </div>
                <span className='text-xs text-zinc-300' >3.00</span>
            </div>
        </div>
    )
}

export default Player