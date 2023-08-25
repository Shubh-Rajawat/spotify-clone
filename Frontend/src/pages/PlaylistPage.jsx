import React, { useState } from 'react'
import HeaderDash from '../components/HeaderDash';
import { Dialog } from 'primereact/dialog';
import PlaylistUser from '../components/Playlist/PlaylistUser';
const PlaylistPage = () => {
    return (
        <div className="w-full h-screen bg-black p-2 rounded-xl overflow-scroll">
            <HeaderDash />
            <div className="p-2 rounded-xl main w-full h-auto py-3
                 bg-gradient-to-t from-zinc-900 to-gray-800">
                <PlaylistUser />
            </div>
        </div>
    )
}

export default PlaylistPage;