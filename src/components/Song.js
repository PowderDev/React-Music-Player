import React from 'react';

const Song = ({currentSong, isPlaying, libraryStatus}) =>{
    const {cover, name, artist} = currentSong

    return(
        <div className={`song-container`} >
            <img src={cover} alt='arr of song' className={isPlaying ? 'playImg' : ''}></img>
            <h2>{name}</h2>
            <h3>{artist}</h3>
        </div>
    )
}

export default Song