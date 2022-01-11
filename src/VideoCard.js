import React from 'react'
import './VideoCard.css'
function VideoCard({image,about,title,likes}) {
    return (
        <div className="videocard">
            
            <img src={image} alt="" />
            <p>{about}</p>
            <h2>{title}</h2>
            <p>{likes}</p>

        </div>
    )
}

export default VideoCard
