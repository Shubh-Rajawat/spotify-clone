import React, { useEffect } from 'react'
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BottomMenu from './components/BottomMenu';
import MediaPlayer from './components/SongPlayer/MediaPlayer';
import NowPlaylingView from './components/NowPlaylingView';
import { useSelector } from 'react-redux';
import PlaylistPage from './pages/PlaylistPage';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Profile from './pages/Profile';
import Cookies from 'js-cookie';
import Signup from './pages/Signup';
import Search from './pages/Search';
const PageRoutes = () => {
    const { checkPlaying } = useSelector( ( state ) => state.checkPlaying );
    const navigate = useNavigate();
    return (
        <>

            <div className="main-body flex overflow-hidden">
                { window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : < div className='sm:min-w-[330px]' ><SideBar /></div> }
                <Routes>
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/signup' element={ <Signup /> } />
                    <Route exact path='/' element={ <Dashboard /> } />
                    {/* <Route exact path='/' element={ <Dashboard /> } /> */ }
                    <Route path='/playlist' element={ <PlaylistPage /> } />
                    <Route path='/profile' element={ <Profile /> } />
                    <Route path='/search' element={ <Search /> } />
                </Routes>
                { checkPlaying ? <NowPlaylingView /> : null }
            </div>
            <div className="fixed bottom-0">
                { ( window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : <MediaPlayer /> ) }
                { ( window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : <BottomMenu /> ) }
            </div>

        </>
    )
}

export default PageRoutes;