import { Avatar, TextField } from '@material-ui/core'
import { Apps, Menu, Notifications, Search, VideoCall, YouTube } from '@material-ui/icons'
import React from 'react'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left--left">
                    <Menu style={{ color: "#606060" }} />
                </div>
                <div className="navbar__left--left">
                    <YouTube style={{ fontSize: 40, color: '#ff0000' }} />
                    <h2>YouTube</h2>
                </div>
            </div>
            <div className="navbar__middle">
                {/* <TextField id="outlined-search" label="Search" type="search" variant="outlined" /> */}
                <input placeholder="Search" />
                <div>
                    <Search style={{ fontSize: 20, color: '606060' }} />
                </div>
            </div>
            <div className="navbar__right">
                <VideoCall style={{ color: '606060' }} />
                <Apps style={{ color: '606060' }} />
                <Notifications style={{ color: '606060' }} />
                <Avatar src="https://avatars1.githubusercontent.com/u/34189674?s=400&u=dd5d0dd314de23f83258bf8bba1c58c804123230&v=4" />
            </div>
        </div>
    )
}

export default NavBar
