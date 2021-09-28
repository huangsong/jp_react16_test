import React from 'react';

interface IVideoPlayerProps {
    src:string,
    width?:string,
    height?:string
}

const VideoPlayer = (props:IVideoPlayerProps)=>{
    const {
        src,
        width,
        height
    } = props;

    let videoStyle = {
        width:width || '100%',
        height:height || 'auto'
    }

    return (
        <video controls style={videoStyle} src={src}></video>
    )
}

export default VideoPlayer;