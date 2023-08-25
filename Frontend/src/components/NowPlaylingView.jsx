import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingActions } from "../redux/nowplayingSlice";


const NowPlaylingView = () => {
  const { nowPlaying } = useSelector( ( state ) => state.nowPlaying );
  const dispatch = useDispatch();
  return (
    <>

      <div className=" bg-zinc-900 px-4 py-4 h-full rounded-md hidden lg:block">
        <div className="">
          <div className="playlist-name flex justify-between">
            <h5 className="cursor-pointer text-stone-300 hover:text-white hover:underline font-bold">
              Latest Tamil
            </h5>
            <span>
              <i
                class="fa-solid fa-xmark bg-stone-800 cursor-pointer hover:bg-stone-700 transition-all  px-2 py-1.5  rounded-full"
                onClick={ () => dispatch( nowPlayingActions.toggleNowPlaying() ) }
              ></i>
            </span>
          </div>
          <div className="song-image my-4">
            <img
              className="mx-auto rounded-md"
              src="https://i.scdn.co/image/ab67616d00001e028011a87cb3495a59094bb73d"
              alt=""
            />
          </div>
          <div className="song-name flex items-center">
            <div className="">
              <h2 className="text-xl font-bold">
                His Name is John (From "Dhruva Natchathiram")
              </h2>
              <h6 className="text-stone-400 font-medium cursor-pointer hover:underline hover:text-stone-300">
                Harris Jayaraj
              </h6>
            </div>
            <div className="flex">
              <i class="fa-regular fa-heart mx-2 cursor-pointer text-neutral-600 hover:text-stone-300"></i>
              <i class="fa-solid fa-ellipsis cursor-pointer text-neutral-600 hover:text-stone-300"></i>
            </div>
          </div>
          <div className="next-in-queue mt-8 bg-zinc-800 rounded-md py-4 px-3">
            <div className="flex justify-between">
              <span className="font-bold">Next in queue</span>
              <span className="font-bold cursor-pointer text-neutral-600 hover:text-white hover:scale-x-105 hover:underline">
                Open queue
              </span>
            </div>
            <div className="flex gap-2 group hover:bg-zinc-700 rounded-md my-2 py-2 ">
              <div className="w-8 flex justify-center items-center">
                <i class="fa-solid fa-music group-hover:hidden inline-block "></i>
                <i class="fa-solid fa-play group-hover:inline-block hidden"></i>
              </div>
              <div className="w-11">
                <img
                  src="https://i.scdn.co/image/ab67616d00004851ba243996031474dac89217f4"
                  alt=""
                />
              </div>
              <div className="">
                <div className="">
                  <h6 className="cursor-pointer text-neutral-600 hover:text-white font-semibold truncate w-[220px] hover:underline">
                    Glimpse of Antony Das(From "Leo")
                  </h6>
                </div>
                <span className="cursor-pointer text-neutral-600 hover:text-white font-medium hover:underline">
                  Anirudh Ravichander
                </span>
                {/* <PictureinPicture /> */ }
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NowPlaylingView;
