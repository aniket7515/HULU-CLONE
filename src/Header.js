import React from 'react'
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
    return (
        // BEM naming convention
        <div className="header">
            
            <div className="header_icons">
                <div className="header_icon header_icon-active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className="header_icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className="header_icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>
                <div className="header_icon">
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>
                <div className="header_icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>
                <div className="header_icon">
                    < PersonOutlineIcon/>
                    <p>Account</p>
                </div>
                 
                 
                 
                
               
            </div>
            <img src="https://www.hulu.com/static/hitch/s3/attachments/cktuo6pxqmxfp1v7c1norzsop-hulu-padding.png" alt="" />

        </div>
    )
}

export default Header
