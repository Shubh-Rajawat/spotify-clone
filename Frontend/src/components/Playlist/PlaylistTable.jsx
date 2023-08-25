import React from 'react'

const PlaylistTable = () => {
    return (
        <div>
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
                            <i class="fa-regular fa-clock"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-zinc-600   group  my-1">
                        <td className="  text-slate-400 text-sm flex">
                            <p className="group-hover:invisible visible">1</p>
                            <i className="fa-solid fa-play  text-zinc-200 group-hover:visible invisible "></i>
                        </td>
                        <td className="py-4">
                            <div className="flex  items-center">
                                <div className="w-10 align-middle">
                                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className="" />
                                </div>
                                <div className="song-name ml-4">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                        The Sliding Mr. Bones (Next Stop, Pottersville)
                                    </p>
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                        Yo Yo Sukhvinder Singh
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
                            <p className="text-sm   text-zinc-400">21 hours ago</p>
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
                    {/* ///////////////////// */ }
                    <tr className="hover:bg-zinc-600   group  my-1">
                        <td className="  text-slate-400 text-sm flex">
                            <p className="group-hover:invisible visible">1</p>
                            <i className="fa-solid fa-play  text-zinc-200 group-hover:visible invisible "></i>
                        </td>
                        <td className="py-4">
                            <div className="flex  items-center">
                                <div className="w-10 align-middle">
                                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className="" />
                                </div>
                                <div className="song-name ml-4">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                        The Sliding Mr. Bones (Next Stop, Pottersville)
                                    </p>
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                        Yo Yo Sukhvinder Singh
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
                            <p className="text-sm   text-zinc-400">21 hours ago</p>
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
                    <tr className="hover:bg-zinc-600   group  my-1">
                        <td className="  text-slate-400 text-sm flex">
                            <p className="group-hover:invisible visible">1</p>
                            <i className="fa-solid fa-play  text-zinc-200 group-hover:visible invisible "></i>
                        </td>
                        <td className="py-4">
                            <div className="flex  items-center">
                                <div className="w-10 align-middle">
                                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className="" />
                                </div>
                                <div className="song-name ml-4">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                        The Sliding Mr. Bones (Next Stop, Pottersville)
                                    </p>
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                        Yo Yo Sukhvinder Singh
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
                            <p className="text-sm   text-zinc-400">21 hours ago</p>
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
                    <tr className="hover:bg-zinc-600   group  my-1">
                        <td className="  text-slate-400 text-sm flex">
                            <p className="group-hover:invisible visible">1</p>
                            <i className="fa-solid fa-play  text-zinc-200 group-hover:visible invisible "></i>
                        </td>
                        <td className="py-4">
                            <div className="flex  items-center">
                                <div className="w-10 align-middle">
                                    <img src="https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e" alt="" className="" />
                                </div>
                                <div className="song-name ml-4">
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer mb-1">
                                        The Sliding Mr. Bones (Next Stop, Pottersville)
                                    </p>
                                    <p className="text-sm hover:underline underline-offset-1 cursor-pointer text-zinc-400 hover:text-slate-200">
                                        Yo Yo Sukhvinder Singh
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
                            <p className="text-sm   text-zinc-400">21 hours ago</p>
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
                    {/* ///////////////////// */ }
                </tbody>
            </table>

        </div>
    )
}

export default PlaylistTable