import React from 'react'

const BottomMenu = () => {
    return (
        <div className='sm:hidden flex  text-xs   w-screen justify-around  bg-gradient-to-t from-black to-black-100 pt-2  ' >
            <div className="home flex flex-col  items-center">
                <i className="fa-solid fa-house text-xl text-white"></i>
                Home
            </div>
            <div className="Search flex flex-col  items-center">
                <i className="fa-solid fa-magnifying-glass text-xl text-white"></i>
                Search
            </div>
            <div className="library flex flex-col  items-center">
                <i className="fa-solid fa-chart-simple text-xl me-2 text-white" ></i>
                Library
            </div>
            <div className="account flex flex-col  items-center">
                <i className="fa-solid fa-user text-xl"></i>
                Account
            </div>
        </div>
    )
}

export default BottomMenu