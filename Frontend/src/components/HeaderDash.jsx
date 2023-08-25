import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const HeaderDash = () => {
    const navigate = useNavigate();


    return (
        <>
            <header className="bg-black/25 flex  justify-between items-center z-10">
                <div className="">
                    <i className="fa-solid fa-angle-left bg-black/50 rounded-full px-3 py-1 my-2 mx-1 sm:mx-2 text-lg "
                        onClick={ () => {
                            navigate( -1 )
                        } }
                    ></i>
                    <i className="fa-solid fa-angle-right bg-black/50 rounded-full px-3 py-1 my-2 mx-1 
                   sm:mx-2 text-lg "
                        onClick={ () => {
                            navigate( +1 )
                        } }
                    ></i>
                </div>
                <div className='me-2' >
                    <button className='bg-white text-black text-xs font-bold px-5 py-2 rounded-3xl  hover:scale-105 mx-2' >Explore Premium</button>
                    <button className='bg-black/75 text-white text-xs font-bold px-5 py-2 rounded-3xl mx-1 my-2 hover:scale-105 hidden sm:inline' >
                        <i className="fa-solid fa-arrow-down-long  me-1 "></i>Install App</button>


                    <button className='bg-black/75 text-white text-xs font-bold relative rounded-3xl group/btn' aria-haspopup="true" aria-expanded="true"
                        id='profile-btn'
                        onClick={ ( e ) => {
                            const dropdown = document?.getElementById( 'profile-btn-dropdown' )
                            // dropdown?.classList.toggle( "hidden")
                            dropdown?.classList.toggle( "hidden" )
                            console.log( "done" );

                        } }
                    >
                        <i className="fa-solid fa-user-large text-center  px-3 py-3 rounded-full"></i>
                        <div className='hidden  absolute -left-36 top-12  bg-zinc-700 py-2 rounded-sm  w-44 z-10'
                            id='profile-btn-dropdown'
                        >
                            <ul className='leading-10' >
                                <li>
                                    <Link >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        upgrade to premium
                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        Download
                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </header>
        </>
    )
}

export default HeaderDash