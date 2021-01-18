import React, {useRef} from 'react';


const Player = ({setSongs, setCurrentSong, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, libraryStatus}) =>{
    
    const playSongHandler = () =>{
        if(isPlaying){
           audioRef.current.pause();
           setIsPlaying(!isPlaying); 
        }else{
           audioRef.current.play();
           setIsPlaying(!isPlaying); 
        }
    }
    
    const getTime = (time) =>{
        return(
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
        )
    }
    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }



    const inptu = useRef()
    const checkOpen = ()=>{
        if(!songInfo.open){
            songInfo.open = true
            inptu.current.style.opacity = 1
        }else{
            songInfo.open =false
            inptu.current.style.opacity = 0
        }
    }

    const changeVolume = (e)=>{
        audioRef.current.volume = e.target.value
        setSongInfo({...songInfo, volume: e.target.value})
    }

    const acttiveLibraryHandler =(nextPrev)=>{
        const newSongs = songs.map(song =>{
            if(song.id === nextPrev.id){
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
    }

    const skipTrackHandler = async (dir) =>{
        let currentIndex = songs.findIndex(song => song.id === currentSong.id)
        if(dir === 'skip-forward'){
          await setCurrentSong(songs[(currentIndex + 1) % songs.length])
          acttiveLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if(dir === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
               await setCurrentSong(songs[songs.length -1]);
               acttiveLibraryHandler(songs[songs.length -1]);
                    if(isPlaying) audioRef.current.play()
                return
            }
           await setCurrentSong(songs[(currentIndex - 1) % songs.length])
           acttiveLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play()
    }




    return(
        <div className="player">
            <div  className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[1]}, ${currentSong.color[0]})`}} className="track">
                    <input className="time-input" onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div style={{transform: `translateX(${songInfo.animationPercentage}%)`}} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            <div className={`volumePlace ${libraryStatus ? 'activeVol' : ''}`}>
                <i className="fas fa-volume-down fa-2x" onClick={checkOpen}></i>
                <input id="volume" type="range" min="0" max="1" value={songInfo.volume} step="0.01" onChange={changeVolume} ref={inptu} />
            </div>
            </div>


            <div className="play-control">
                <i className="fas fa-angle-left skip-back fa-2x" onClick={() => skipTrackHandler('skip-back')}></i>
                <i className={ !isPlaying ? "fas fa-play play fa-2x " : "fas fa-pause play fa-2x"}  onClick={playSongHandler}></i>
                <i className="fas fa-angle-right skip-forward fa-2x" onClick={() => skipTrackHandler('skip-forward')}></i>
            </div>
        </div>

    )
}

export default Player