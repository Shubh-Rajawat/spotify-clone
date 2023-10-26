import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useClickOutside } from 'primereact/hooks';
import { Dialog } from 'primereact/dialog';
import Cookies from 'js-cookie';

const HeaderDash = () => {
    const hours = new Date().getHours()
    const greeting = ( hours < 12 ) ? "Morning" : ( hours < 17 ) ? "Afternoon" : "Evening"
    const navigate = useNavigate();
    const overlayRef = useRef( null );
    const [ instllAppModal, setInstallAppModal ] = useState( false );
    const [ profileVisible, setProfileVisible ] = useState( false );
    useClickOutside( overlayRef, () => {
        setProfileVisible( false );
    } );
    return (
        <>
            <header className="bg-transparent flex  justify-between items-center z-10 ">
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
                    <span className='select-none font-bold hidden md:inline' >Good { greeting }</span>
                </div>
                <div className='me-2' >
                    <button className='bg-white text-black text-xs font-bold px-5 py-2 rounded-3xl  hover:scale-105 mx-2' >Explore Premium</button>
                    <button
                        onClick={ () => setInstallAppModal( true ) }
                        className='bg-black/75 text-white text-xs font-bold px-5 py-2 rounded-3xl mx-1 my-2 hover:scale-105 hidden sm:inline'>
                        <i className="fa-solid fa-arrow-down-long  me-1 "></i>Install App
                    </button>
                    <button ref={ overlayRef } className='bg-black/75 text-white text-md font-bold relative rounded-3xl group/btn' aria-haspopup="true" aria-expanded="true"
                        id='profile-btn'
                        onClick={ ( e ) => {
                            setProfileVisible( !profileVisible )
                        } }>
                        <i className="fa-solid fa-user-large text-center  px-3 py-3 rounded-full"></i>
                        { profileVisible && <div className='absolute -left-28 top-10  bg-[#3E3E3E] pt-2 rounded-md  w-36 z-10'
                            id='profile-btn-dropdown'
                        >
                            <ul className='leading-10  text-center' >
                                <li className='hover:bg-[#272727]'
                                    onClick={ () => navigate( '/profile' ) }
                                >
                                    <span>
                                        Profile
                                    </span>
                                </li>
                                <li className='hover:bg-[#272727]' >
                                    <Link>
                                        Support
                                    </Link>
                                </li>
                                <li className='hover:bg-[#272727]' >
                                    <Link>
                                        Settings
                                    </Link>
                                </li>
                                <li className='border-t hover:bg-[#272727] px-3 rounded-b-md'>
                                    <span onClick={ () => {
                                        Cookies.remove( 'theme' );
                                        navigate( `/login` )
                                    } } >
                                        Logout
                                    </span>
                                </li>
                            </ul>
                        </div> }
                    </button>
                </div>
            </header>

            {/* <Dialog header={ <i className="fa-solid fa-circle-info"></i> } draggable={ false } visible={ instllAppModal } onHide={ () => setInstallAppModal( false ) }>
                <p className="m-0">
                    <h1 className='text-center mb-6 text-2xl'>App Is in Production</h1>
                </p>
            </Dialog> */}
        </>
    )
}

export default HeaderDash;


