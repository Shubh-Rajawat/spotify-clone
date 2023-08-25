import React from 'react'
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BottomMenu from './components/BottomMenu';
import MediaPlayer from './components/SongPlayer/MediaPlayer';
import NowPlaylingView from './components/NowPlaylingView';
import { useSelector } from 'react-redux';
import PlaylistPage from './pages/PlaylistPage';
import { Splitter, SplitterPanel } from 'primereact/splitter';
const PageRoutes = () => {
    const { nowPlaying } = useSelector( ( state ) => state.nowPlaying );
    return (
        <>
            <BrowserRouter>
                { window.location.pathname === "/login" || window.location.pathname === "/signup" ? null : <Splitter className="flex overflow-hidden">
                    {/* <div > */ }
                    <SplitterPanel className='min-w-max' size={ 15 } minSize={ 12 } ><SideBar />
                    </SplitterPanel>
                    <SplitterPanel size={ 85 } className='flex' >
                        <Routes>
                            <Route path='/login' element={ <Login /> } />
                            <Route exact path='/' element={ <Dashboard /> } />
                            <Route path='/playlist' element={ <PlaylistPage /> } />
                        </Routes>
                        { nowPlaying ? <NowPlaylingView /> : null }
                    </SplitterPanel>
                    {/* </div> */ }
                </Splitter> }

                <Routes>
                    <Route path='/login' element={ <Login /> } />
                </Routes>
                <div className="fixed bottom-0">
                    { ( window.location.pathname === "/login" || window.location.pathname === "/signup" ? null : <MediaPlayer /> ) }
                    { ( window.location.pathname === "/login" || window.location.pathname === "/signup" ? null : <BottomMenu /> ) }
                </div>
            </BrowserRouter>
        </>
    )
}

export default PageRoutes;