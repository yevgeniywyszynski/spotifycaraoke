import React from "react";

export default function TrackResult({track, chooseTrack}) {

    const handlePlaySong = () => {
        chooseTrack(track)
    }

    return(
        <div 
            className="d-flex m-2 align-items-center" 
            style={{cursor: "pointer"}}
            onClick={handlePlaySong}
        >
            <img src={track.albumUrl} alt="imgTrack" style={{ height: "85px", width: '85px'}} />
            <div className="m-3 cursor-pointer">
                <div className="ml-3">{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}