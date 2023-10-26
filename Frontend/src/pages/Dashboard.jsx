import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import HeaderDash from '../components/HeaderDash'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../BaseUrl';
var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
};
const responsiveOptions = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

]
const Dashboard = () => {
    const navigate = useNavigate()
const [songs , setSongs] = useState();
useEffect(()=>{
    let token = Cookies.get( `theme` )
    if(!token){
        navigate(`/signup`)
        return;
    }
    axios.post( `${ baseUrl}song/getsongbygenre`)
    .then(res => {
        if(res.data.status){
            setSongs(res.data.data)
            console.log("hello",res.data.data)
        }else{
            setSongs(null)
        }
    }).catch(err => {
        console.log(err)
    })
},[])
const songData = "" 





    const songs1 = [ "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/1wRPtKGflJrBx9BmLsSwlU/en/default",
     "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb339fc4fb0bf1ddd5cd420d60/2/en/default",
       "https://i.scdn.co/image/ab67706f00000002fc469bf0981d8eb81e543501",
        "https://i.scdn.co/image/ab6761610000e5ebd6a28646959575873804f23e",
         "https://i.scdn.co/image/ab67706f00000002fc469bf0981d8eb81e543501",
           "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb339fc4fb0bf1ddd5cd420d60/2/en/default",
         ]
    const LofiSongs = [ "https://i.scdn.co/image/ab67616100005174911da8f9029930fda9637859",
    "https://i.scdn.co/image/ab67616d00001e02bdc5d584eb42858552efb6be",
    "https://i.scdn.co/image/ab67616d00001e02777bef4f76be16d559da6ef5",
    "https://i.scdn.co/image/ab67616d00001e02bdc5d584eb42858552efb6be",
    "https://i.scdn.co/image/ab67706f00000002fc469bf0981d8eb81e543501",
    "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb8eb1daa20199cca83b30df5a/3/en/default",
    "https://i.scdn.co/image/ab67616d00001e02777bef4f76be16d559da6ef5",
    "https://i.scdn.co/image/ab67616100005174911da8f9029930fda9637859",
         ]
    return (
       <>
            <div className="w-full h-screen bg-black p-2 rounded-xl overflow-scroll" style={{
                paddingBottom: "81px"
            }}>
               <HeaderDash />
                <div className=" sm:pl-4 rounded-xl main w-full h-auto py-3 bg-gradient-to-t from-black/80 to-zinc-900
 overflow-auto mx-auto  ">
                    <div className="main break-after-column sm:pl-3 py-5 text-start ">
                        <h1 className='text-start text-2xl font-bold'>Hip-Hop</h1>
                        { songs?.map((item , index)=>{
                            return(
                                <Card data={ item } img={ songs1[ index ] } />
                            )
                        })}
                    </div>     
                    <div className="main break-after-column sm:pl-3 py-5 text-start ">
                        <h1 className='text-start text-2xl font-bold'>Lofi</h1>
                        { songs?.map((item , index)=>{
                            return(
                                <Card data={ item }  img={ LofiSongs[index] }  />
                            )
                        })}
                    </div>     
                    <div className="main break-after-column sm:pl-3 py-5 text-start ">
                        <h1 className='text-start text-2xl font-bold'>Hollywood</h1>
                        { songs1?.map( ( item, index ) => {
                            return (
                                <Card img={item} />
                            )
                        } ) }
                    </div> 
             </div>
            </div>
            <div>
                
            </div>
       </>
    )
}

export default Dashboard


    // < div className = 'bg-black w-full p-2'>
    //     <div className="dashboard-wrapper 
    //         bg-gradient-to-r from-green-900 to-black
    //         rounded-lg w-full h-full">
    //         <header className="bg-teal-950/25 py-1 flex 2xl:gap-x-96 lg:gap-x-72  md:gap-x-14">
    //             <div className="navigate  2xl:me-96 xl:me-42 lg:me-30 md:me-16 sm:me-18  py-1">
    //                 <i className="fa-solid fa-angle-left bg-black/50 rounded-full px-3 py-1 ms-2 text-xl" ></i>
    //                 <i className="fa-solid fa-angle-right bg-black/50 rounded-full px-3 py-1 ms-2 text-xl"></i>
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
    //     </div>



// const hours = new Date().getHours()
// const greeting = ( hours < 12 ) ? "Morning" : ( hours < 17 ) ? "Afternoon" : "Evening"

