import React from 'react'
import HeaderDash from '../components/HeaderDash'

const Profile = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-t from-zinc-900   to-zinc-600 py-2 rounded-xl overflow-scroll">
            <HeaderDash />
            <div className="main w-full h-auto py-3
                ">
                <UserInfo />
            </div>
            <div className='w-full'>


            </div>
        </div>
    )
}

const UserInfo = () => {
    return (
        <div className="">
            <div className="playlist-banner flex gap-6 my-3 pl-4 py-4 ">
                <div className="playlist-img w-44 rounded-full overflow-hidden">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" />
                </div>
                <div className="playlist-desc flex justify-end flex-col">
                    <div className="">
                        <p className="text-zinc-400"  >Profile</p>
                    </div>
                    <div className="mb-4">
                        <h1 className="text-7xl font-extrabold">
                            Shubh Rajawat
                        </h1>
                    </div>
                    <div className="my-2">
                        <p className="text-zinc-400">
                            1 Public Playlist
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black/25 h-auto px-2">
                <h1 className='text-2xl'>Recommended</h1>
                <table class="table-auto w-full">
                    <thead className="">
                        <tr className="divide-y divide-y-reverse divide-gray-600">
                            <th className="text-left text-sm font-medium text-zinc-400">#</th>
                            <th className="text-left text-sm font-medium text-zinc-400">
                                Title
                            </th>
                            <th className="text-left text-sm font-medium text-zinc-400">
                                Album
                            </th>
                            <th className="text-left text-sm font-medium text-zinc-400">
                                Date added
                            </th>
                            <th className="text-center  text-sm font-medium text-zinc-400 pb-3">
                                <i className="fa-regular fa-clock"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="group  my-1 align-middle">
                            <td className="  text-slate-400  px-1">
                                <i className="fa-solid fa-1 mx-auto text-zinc-200 group-hover:invisible visible "></i>
                                <i className="fa-solid fa-play mx-auto text-zinc-200 group-hover:visible invisible z-10 -left-1 "></i>
                            </td>
                            <td className="py-4">
                                <div className="flex  items-center">
                                    <div className="w-10 align-middle">
                                        <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" />
                                    </div>
                                    <div className="song-name ml-4">
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </p>
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                            Yo Yo Honey Singh
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className=" ">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400  inline hover:text-slate-200">
                                        Yo Yo Honey Singh
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm   text-zinc-400">2 hours ago</p>
                            </td>
                            <td className=" ">
                                <div className="flex justify-center">
                                    <span>
                                        <i className="fa-regular fa-heart  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible "></i>
                                    </span>
                                    <p className="text-sm   text-zinc-400 mx-5">4:06</p>
                                    <span>
                                        <i className="fa-solid fa-ellipsis  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="group  my-1 align-middle">
                            <td className="  text-slate-400  px-1">
                                <i className="fa-solid fa-1 mx-auto text-zinc-200 group-hover:invisible visible "></i>
                                <i className="fa-solid fa-play mx-auto text-zinc-200 group-hover:visible invisible z-10 -left-1 "></i>
                            </td>
                            <td className="py-4">
                                <div className="flex  items-center">
                                    <div className="w-10 align-middle">
                                        <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" />
                                    </div>
                                    <div className="song-name ml-4">
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </p>
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                            Yo Yo Honey Singh
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className=" ">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400  inline hover:text-slate-200">
                                        Yo Yo Honey Singh
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm   text-zinc-400">2 hours ago</p>
                            </td>
                            <td className=" ">
                                <div className="flex justify-center">
                                    <span>
                                        <i className="fa-regular fa-heart  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible "></i>
                                    </span>
                                    <p className="text-sm   text-zinc-400 mx-5">4:06</p>
                                    <span>
                                        <i className="fa-solid fa-ellipsis  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="group  my-1 align-middle">
                            <td className="  text-slate-400  px-1">
                                <i className="fa-solid fa-1 mx-auto text-zinc-200 group-hover:invisible visible "></i>
                                <i className="fa-solid fa-play mx-auto text-zinc-200 group-hover:visible invisible z-10 -left-1 "></i>
                            </td>
                            <td className="py-4">
                                <div className="flex  items-center">
                                    <div className="w-10 align-middle">
                                        <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" />
                                    </div>
                                    <div className="song-name ml-4">
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </p>
                                        <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                            Yo Yo Honey Singh
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className=" ">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400  inline hover:text-slate-200">
                                        Yo Yo Honey Singh
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm   text-zinc-400">2 hours ago</p>
                            </td>
                            <td className=" ">
                                <div className="flex justify-center">
                                    <span>
                                        <i className="fa-regular fa-heart  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible "></i>
                                    </span>
                                    <p className="text-sm   text-zinc-400 mx-5">4:06</p>
                                    <span>
                                        <i className="fa-solid fa-ellipsis  text-slate-400 hover:text-slate-200 cursor-pointer group-hover:visible invisible"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default Profile