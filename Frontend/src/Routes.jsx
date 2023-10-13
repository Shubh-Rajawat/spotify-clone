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
const PageRoutes = () => {
    const { nowPlaying } = useSelector( ( state ) => state.nowPlaying );
    const navigate = useNavigate();
    return (
        <>

            <div className="flex overflow-hidden">
                { window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : < div className='min-w-max' ><SideBar /></div> }
                <Routes>
                    <Route path='/login' element={ <Login /> } />
                    {/* <Route exact path='/' element={ !Cookies.get( `theme` ) ? <Login /> : <Dashboard /> } /> */ }
                    <Route exact path='/' element={ <Dashboard /> } />
                    <Route path='/playlist' element={ <PlaylistPage /> } />
                    <Route path='/profile' element={ <Profile /> } />
                </Routes>
                { nowPlaying ? <NowPlaylingView /> : null }
            </div>

            <div className="fixed bottom-0">
                { ( window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : <MediaPlayer /> ) }
                { ( window.location.pathname === "/login" || window.location.pathname === "/signup" || !Cookies.get( `theme` ) ? null : <BottomMenu /> ) }
            </div>

        </>
    )
}

export default PageRoutes;