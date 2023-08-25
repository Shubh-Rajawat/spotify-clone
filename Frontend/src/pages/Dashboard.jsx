import React from 'react'
import Card from '../components/Card'
import HeaderDash from '../components/HeaderDash'

const Dashboard = () => {
    return (
       <>
            <div className="w-full h-screen bg-black p-2 rounded-xl overflow-hidden">
               <HeaderDash />
                <div className="p-2 rounded-xl main w-full h-auto py-3 bg-zinc-900 
                overflow-auto ">
                 <Card />
             </div>
            </div>
            <div>
                
            </div>
       </>
    )
}

export default Dashboard


    // < div className = 'bg-black w-full p-2' >
    //     <div className="dashboard-wrapper 
    //         bg-gradient-to-r from-green-900 to-black
    //         rounded-lg w-full h-full">
    //         <header className="bg-teal-950/25 py-1 flex 2xl:gap-x-96 lg:gap-x-72  md:gap-x-14">
    //             <div className="navigate  2xl:me-96 xl:me-42 lg:me-30 md:me-16 sm:me-18  py-1">
    //                 <i className="fa-solid fa-angle-left bg-black/50 rounded-full px-3 py-1 ms-2 text-xl "  ></i>
    //                 <i className="fa-solid fa-angle-right bg-black/50 rounded-full px-3 py-1 ms-2 text-xl " ></i>
    //             </div>
    //             <div className="">
    //                 <button className='bg-white text-black text-sm font-bold px-5 py-2 rounded-3xl mx-3 my-2 hover:scale-105 ' >Explore Premium</button>
    //                 <button className='bg-black/75 text-white text-sm font-bold px-5 py-2 rounded-3xl mx-3 my-2 hover:scale-105 ' >
    //                     <i className="fa-solid fa-arrow-down-long  me-1 px-1.5 py-1"></i>
    //                     Install App</button>
    //                 <button className='bg-black/75 text-white text-sm font-bold  rounded-3xl mx-3 my-2 hover:scale-105 ' >
    //                     <i className="fa-solid fa-user-large text-center  px-3 py-3 rounded-full"></i>
    //                 </button>
    //             </div>
    //         </header>
    //         <div className="main break-after-column p-3">
    //             <Card />
    //         </div>
    //     </div>
    //     </div >





// const hours = new Date().getHours()
// const greeting = ( hours < 12 ) ? "Morning" : ( hours < 17 ) ? "Afternoon" : "Evening"