import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingActions } from "../redux/nowplayingSlice";
import baseUrl from "../BaseUrl";
import logo from "../Assets/media/white-logo.svg"
import { checkPlayingActions } from "../redux/checkPlayingSlice";
import axios from "axios";

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];

const NowPlaylingView = () => {
  const { nowPlaying } = useSelector( ( state ) => state.nowPlaying );
  const { currentSong } = useSelector( ( state ) => state.song );
  const dispatch = useDispatch();
  const [ queue, setQueue ] = useState();
  useEffect( () => {
    axios.post( `${ baseUrl }song/getsongbygenre`, {
      genre: currentSong?.genre ? `${ currentSong?.genre }` : null
    } )
      .then( res => {
        if ( res.data.status ) {
          setQueue( res.data.data )
        } else {
          setQueue( null );
        }
      } ).catch( err => {
        console.log( err )
      } )
  }, [ currentSong?.genre ] )
  return (
    <>
      <div className=" bg-zinc-900 px-4 py-4 h-full rounded-md hidden lg:block">
        <div className="">
          <div className="playlist-name flex justify-between">
            <h5 className="cursor-pointer text-stone-300 hover:text-white hover:underline font-bold">
              Current Song
            </h5>
            <span>
              <i
                className="fa-solid fa-xmark bg-stone-800 cursor-pointer hover:bg-stone-700 transition-all  px-2 py-1.5  rounded-full"
                onClick={ () => dispatch( checkPlayingActions.togglecheckPlaying() ) }
              ></i>
            </span>
          </div>
          <div className="song-image my-4">
            <img
              className="mx-auto rounded-md max-h-48"
              src={ currentSong?.image ? `${ baseUrl }${ currentSong?.image }` : logo }
              alt="not found"
            />
          </div>
          <div className="song-name flex justify-between items-center">
            <div className="">
              <h2 className="text-xl font-bold">
                { currentSong?.title }
              </h2>
              <h6 className="text-stone-400 font-medium cursor-pointer hover:underline hover:text-stone-300">
                { currentSong?.genre }
              </h6>
            </div>
            <div className="flex me-2">
              { currentSong?.title &&
                <>
                  <i className="fa-regular fa-heart mx-2 cursor-pointer text-neutral-600 hover:text-stone-300"></i>
                  <i className="fa-solid fa-ellipsis cursor-pointer text-neutral-600 hover:text-stone-300"></i>
                </>

              }
            </div>
          </div>
          <div className="next-in-queue mt-8 bg-zinc-800 rounded-md py-4 px-3">
            <div className="flex justify-between">
              <span className="font-bold">Next in queue</span>
              {/* <span className="font-bold cursor-pointer text-neutral-600 hover:text-white hover:scale-x-105 hover:underline">
                Open queue
              </span> */}
            </div>

            <div className=" h-96 overflow-y-scroll" >
              { queue &&
                queue.map( ( item ) => {
                  return (
                    <div key={ item._id } className="flex gap-2 group hover:bg-zinc-700 rounded-md my-2 py-2 ">
                      <div className="w-8 flex justify-center items-center">
                        <i className="fa-solid fa-music group-hover:hidden inline-block "></i>
                        <i className="fa-solid fa-play group-hover:inline-block hidden"></i>
                      </div>
                      <div className="w-11">
                        <img
                          src="https://i.scdn.co/image/ab67616d00004851ba243996031474dac89217f4"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="">
                          <h6 className="cursor-pointer text-neutral-300  font-semibold truncate w-[220px] hover:underline">
                            { item?.title }
                          </h6>
                        </div>
                        <span className="cursor-pointer text-neutral-600 hover:text-white font-medium hover:underline">
                          { item?.genre }
                        </span>
                        {/* <PictureinPicture /> */ }
                      </div>
                    </div>

                  )
                } )
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NowPlaylingView;
