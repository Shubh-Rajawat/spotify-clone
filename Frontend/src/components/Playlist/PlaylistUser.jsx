import React from 'react'
import PlaylistTable from './PlaylistTable'

const PlaylistUser = () => {
    const handle = ( e ) => {
        e.preventDefault();
        alert( "ckucke" );
        console.log( "right cicked" );
    };
    return (
        <div className="playlist-wrapper">
            <div className="">
                <div className="playlist-banner flex gap-6 my-3 pl-4 py-4 ">
                    <div className="playlist-img w-44">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" />
                    </div>
                    <div className="playlist-desc flex justify-end flex-col">
                        <div className="">
                            <p className="text-zinc-400"  >Playlist</p>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-7xl font-extrabold">
                                This Is Honey Singh
                            </h1>
                        </div>
                        <div className="my-2">
                            <p className="text-zinc-400">
                                This is Yo Yo Honey Singh. The essential tracks, all in one
                                playlist
                            </p>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="play-between ml-3">
                    <div className="play my-8  mx-4">
                        <span className="px-5 py-4  rounded-full play-green hover:scale-105 cursor-pointer ">
                            <i className="fa-solid fa-play text-xl text-black "></i>
                        </span>
                        <span className="px-5 py-4 ms-4">
                            <i class="fa-regular fa-heart text-3xl text-slate-400 hover:text-slate-200 cursor-pointer"></i>
                        </span>
                        <span className="px-5 py-4">
                            <i className="fa-solid fa-ellipsis text-3xl text-slate-400 hover:text-slate-200 cursor-pointer"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="playlist-table mx-4 px-5 ">
                <PlaylistTable />
            </div>
        </div>
    )
}

export default PlaylistUser