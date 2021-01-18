import React, {useState, useEffect, useRef} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data';
import Library from './components/library';
import Nav from './components/nav';
import './styles/app.css';
import axios from 'axios';






 function App() {



  const audioRef = useRef(null)
  let [songs, setSongs] = useState(chillHop());

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        volume: 0.15,
        open: false,
        animationPercentage: 0 
    });
  const {audio} = currentSong;
  const [libraryStatus, setLibraryStatus] = useState(false)


  const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;

        const animationPercentage = ((current / duration) * 100 ).toFixed(2);


        

        setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animationPercentage})
    }

    const songEnded = async()=>{
      let currentIndex = songs.findIndex(song => song.id === currentSong.id)
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      if(isPlaying) audioRef.current.play()
    }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''} `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} isPlaying={isPlaying} libraryStatus={libraryStatus}/>
      <Player libraryStatus={libraryStatus} setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} songInfo={songInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>
      <audio onEnded={songEnded} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={audio}></audio>
    </div>
  );
}

export default App;
