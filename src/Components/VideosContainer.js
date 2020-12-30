import React from 'react'
import VideoCard from './VideoCard'
import YoutubeList from './../Data/videoData.json'

function VideosContainer() {
    return (
        <div className="videocontainer">
            {YoutubeList.map((video) => {
                return (
                    <VideoCard
                        StaticThumb={video.StaticThumb}
                        TumbSrc={video.TumbSrc}
                        ChannelSrc={video.ChannelSrc}
                        Title={video.Title}
                        ChannelName={video.ChannelName}
                        ViewCount={video.ViewCount}
                        Uploadedat={video.Uploadedat}
                    />
                )
            })}
            {/* <VideoCard
                StaticThumb="https://i.ytimg.com/vi/aOaopH0sTsY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBRpslSWjVmHxvQPuaxrOIdDPbLzg"
                TumbSrc="https://i.ytimg.com/an_webp/aOaopH0sTsY/mqdefault_6s.webp?du=3000&sqp=CNyksf8F&rs=AOn4CLBbXxbQ2lOI_bp0W51dv7QnQK6AAA"
                ChannelSrc="https://yt3.ggpht.com/ytc/AAUvwnibBdicD9vxniRqjajlv2lw7YsmtlgP4EQ-mmaGKQ=s88-c-k-c0x00ffffff-no-rj"
                Title="2020 : TikTok Ban, PUBG Ban, Micromax Comeback, PUBG Mobile India, FAUG, PS5 Etc...🔥🔥🔥"
                ChannelName="Technical Guruji"
                ViewCount="34k"
                Uploadedat="2 hours"
            /> */}

        </div>
    )
}

export default VideosContainer
