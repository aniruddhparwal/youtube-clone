import { History, Home, OndemandVideo, Subscriptions, ThumbUpAlt, VideoLibrary, WatchLater, Whatshot, YouTube } from '@material-ui/icons'
import React from 'react'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--active">
                <Home />
                <span>Home</span>
            </div>
            <div className="sidebar__item">
                <Whatshot />
                <span>Trending</span>
            </div>
            <div className="sidebar__item">
                <Subscriptions />
                <span>Subscription</span>
            </div>
            <div className="sidebar__item">
                <YouTube />
                <span>Orignals</span>
            </div>
            <div className="sidebar__additional">
                <hr />

                <div className="sidebar__item">
                    <VideoLibrary />
                    <span>Library</span>
                </div>
                <div className="sidebar__item">
                    <History />
                    <span>Histort</span>
                </div>
                <div className="sidebar__item">
                    <OndemandVideo />
                    <span>Your Video</span>
                </div>
                <div className="sidebar__item">
                    <WatchLater />
                    <span>Watch Later</span>
                </div>
                <div className="sidebar__item">
                    <ThumbUpAlt />
                    <span>Liked Videos</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
