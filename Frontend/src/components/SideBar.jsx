import React from 'react'
import { NavLink, Link } from "react-router-dom"
const SideBar = () => {
    return (
        <>

            <aside className='h-full bg-black  hidden sm:block text-md border-r border-slate-500 overflow-hidden'>
                <div className="nav-links bg-zinc-900 indent-3  font-semibold py-3 rounded-2xl my-3 mx-3 " >
                    <div className="nav-item my-4">
                        <NavLink to={ `/` } >
                            <div>
                                <span className='' ><i className="fa-solid fa-house me-2" style={ { color: "#fff " } }></i> Home</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-item my-4">
                        <NavLink to={ `/search` } >
                            <div>
                                <span><i className="fa-solid fa-search me-2" style={ { color: "#fff " } }></i>Search</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className=" relative nav-links bg-zinc-900 indent-3 text-md font-semibold py-3 rounded-2xl my-3 mx-3 select-none h-full">
                    <div className="nav-item my-4">
                        <NavLink to={ `/library` } >
                            <div>
                                <span><i className="fa-solid fa-chart-simple me-2 select-none" style={ { color: "#fff " } }></i> Your Library</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-item my-4 indent-8">
                        <NavLink to={ `/playlist` } >
                            <div>

                                <span><i className="fa-solid fa-radio me-2 select-none" style={ { color: "#fff " } }></i> Your Playlists</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-item my-4 indent-8">
                        <NavLink  >
                            <div>

                                <span><i className="fa-solid fa-microphone-lines me-2 select-none" style={ { color: "#fff " } }></i>   &nbsp;Browse Podcasts</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="absolute bottom-64 stack mx-3 flex flex-wrap indent-6">
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >Legal</p>
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >Privacy center</p>
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >Cookies</p>
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >Privacy Policy</p>
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >About Ads</p>
                        <p className='text-sm text-zinc-400 hover:text-white my-2 cursor-pointer' >Accessibility</p>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;