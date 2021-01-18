import React from 'react';
import LibrarySong from './librarySong';
const Library = ({songs, setCurrentSong, audioRef, songInfo, isPlaying, setSongs, libraryStatus}) =>{

    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`} >
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setCurrentSong={setCurrentSong}  key={song.id} songs={songs} song={song} audioRef={audioRef} songInfo={songInfo} isPlaying={isPlaying} setSongs={setSongs}/>)}
            </div>
        </div>
    )
}

export default Library