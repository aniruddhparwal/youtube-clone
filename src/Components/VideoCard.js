import { Avatar } from '@material-ui/core'
import React from 'react'

function VideoCard({ TumbSrc, ChannelSrc, Title, ChannelName, ViewCount, Uploadedat }) {
    return (
        <div className="videocard">
            <img src={TumbSrc} />
            <div className="videoCard__infoContainer">
                <Avatar src={ChannelSrc} />
                <div className="videoCard__infoContainer--data">
                    <h4>{Title}</h4>
                    <h5>{ChannelName}</h5>
                    <div>
                        {ViewCount}
                        {Uploadedat}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
