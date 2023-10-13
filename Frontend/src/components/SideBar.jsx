import React from 'react'
import { NavLink, Link } from "react-router-dom"
const SideBar = () => {
    return (
        <>

            <aside className='h-screen bg-black  hidden sm:block text-md overflow-auto border-r border-slate-500'>
                <div className="nav-links bg-zinc-900 indent-3  font-semibold py-3 rounded-2xl my-3 mx-3 " >
                    <div className="nav-item my-4">
                        <NavLink to={ `/` } >
                            <div>
                                <span className='' ><i className="fa-solid fa-house me-2" style={ { color: "#fff " } }></i> Home</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-item my-2">
                        <NavLink to={ `/search` } >
                            <div>
                                <span><i className="fa-solid fa-search me-2" style={ { color: "#fff " } }></i> Search</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="nav-links bg-zinc-900 indent-3 text-md font-semibold py-3 rounded-2xl my-3 mx-3 ">
                    <div className="nav-item my-2">
                        <NavLink to={ `/library` } >
                            <div>
                                <span><i className="fa-solid fa-chart-simple me-2" style={ { color: "#fff " } }></i> Your Library</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="stack  mx-3">
                        <div className="create-plylist bg-zinc-800 mx-2 my-4 rounded-2xl indent-5 leading-10 px-3">
                            <p>Create your playlists</p>
                            <p className='text-sm text-slate-200' >It's easy we will help you</p>
                            <Link to="/playlist" className='bg-white text-black text-sm font-bold px-5 py-2 rounded-3xl mx-3 my-2 hover:scale-105 hover:font-extrabold' >Create playlist</Link>
                        </div>
                        <div className="srch-pods bg-zinc-800 mx-2 my-4 rounded-2xl indent-5 leading-10">
                            <p>find some podcasts  </p>
                            <p className='text-sm text-slate-200 ' >we will keep you updated</p>
                            <button className='bg-white text-black text-sm font-bold px-5 py-2 rounded-3xl mx-3 my-2 hover:scale-105 hover:font-extrabold' >Browse Podcasts </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;