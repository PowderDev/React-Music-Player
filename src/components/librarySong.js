import React, {useEffect} from 'react';

const LibrarySong = ({song, songs, setCurrentSong, audioRef, songInfo, isPlaying, setSongs}) =>{
    const {cover, name, artist, id} = song

    const songSelectHandler = async ()=>{
       await setCurrentSong(song);

        const newSongs = songs.map(song =>{
            if(song.id === id){
                return{
                    ...song, active: true
                }
            }else{
                return{
                    ...song, active: false
                }
            }
        })
        setSongs(newSongs)

        if(isPlaying) audioRef.current.play()
    }

    useEffect(() =>{
        audioRef.current.volume = 0.07;
        songInfo.volume = 0.07;
    }, [songs])
 
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={cover} alt='arr of song'></img>
            <div className="song-desc">
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong