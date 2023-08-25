import React from 'react'

const CurrentSong = () => {
    return (
        <>

            <div className="song hidden lg:flex mb-5 gap-3 items-center">
                <div className="songimg w-10">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className='w-full' />
                </div>
                <div className="songname">
                    <p className="text-sm w-full overflow-hidden truncate">Yaar bathere(yo yo honey singh)</p>
                    <p className="text-xs text-neutral-400"><a href="" target="_blank" rel="noopener noreferrer">
                        honey singh
                    </a></p>
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
    return (
        <div className="song flex mb-5 gap-3 items-center lg:hidden">
            <div className="songimg w-10">
                <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className='w-full' />
            </div>
            <div className="songact flex gap-2 items-center">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-images"></i>
            </div>
        </div>
    )
}

export default CurrentSong;