import React, { useEffect, useRef, useState } from 'react'
import { Heart, Play, Pause, CirclePlus, Ellipsis, CircleArrowDown, CircleArrowDownIcon, Shuffle } from 'lucide-react'
import './liked.css'

const Liked = ({ likedMusic, handleClick, playRef, likeAdded, userName, setFirst, displayState, setDisplayState }) => {

  const [durations, setDurations] = useState([])
  const [display, setDisplay] = useState({})
  const btnRef = useRef([])


  const displayName = userName || localStorage.getItem('username') || 'Guest';

  useEffect(() => {
    setDisplayState(displayName)
    const firstLetter = displayName?.[0] || 'G'
    localStorage.setItem('userLetter', firstLetter)
    setFirst(firstLetter)
  }, [displayName, setFirst])


  const all = [...(Array.isArray(likeAdded) ? likeAdded : []),
  ...(Array.isArray(likedMusic) ? likedMusic : [])];
  useEffect(() => {

    const fetchDurations = async () => {
      const newDurations = await Promise.all(
        all.map((song) => {
          return new Promise((resolve) => {
            const audio = new Audio(song.song);
            audio.addEventListener('loadedmetadata', () => {
              resolve(audio.duration);
            });
          });
        })
      );
      setDurations(newDurations);
    };

    fetchDurations();
  }, [likedMusic, likeAdded]);


  const handleDisplay = (index) => {
    setDisplay((prev) => {
      const newDisplay = {};
      all.forEach((_, i) => {
        newDisplay[i] = i === index ? !prev[i] : false;
      });
      return newDisplay;
    });
  };
  const uniqueSongs = all.filter(
    (song, index, self) => self.findIndex(s => s.name === song.name) === index
  );



  return (
    <div>

      <div className="upper-sec">
        <div className="play-list">playlist</div>
        <div className="liked-text">LIKED SONGS</div>
        <div className="user-name">{displayState} &bull; {likedMusic.length} songs</div>
        <div to={'/liked'} className="favs-div"><Heart size={60} color='white' /></div>
      </div>
      <div className="list-sec">
        <div className="upper-controls">
          <div className="button-sec">
            <button className="play-pause">
              <Play fill='black' size={19} />
            </button>
          </div>
          <div className="controls-sec">
            <Shuffle />

            <CircleArrowDownIcon />

            <Ellipsis />

            <CirclePlus />
          </div>
        </div>
        <div className="lists">{
          uniqueSongs.map((liked, index) => (
            <div className="liked-card" key={liked.id || index}>
              <audio src={liked.song} ref={(el) => (playRef.current[index] = el)} />
              <button className="play-music-liked" ref={(el) => (btnRef.current[index] = el)} onClick={() => {
                handleClick(index);
                handleDisplay(index)
              }}>
                {
                  display[index] ? (
                    <Pause size={20} className='play-over' fill='white' color='white' />
                  ) : (
                    <Play size={20} className='play-over' fill='white' color='white' />
                  )
                }
              </button>
              <img src={liked.image} alt={liked.name} className='liked-img' />
              <div className="names-liked">
                <div className="the-names">
                  <div className="liked-name">{liked.name}</div>
                  <div className="artist-liked">{liked.artist}</div>
                </div>
                <div className="date">
                  {new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="duration">
                  {durations[index]
                    ? Math.floor(durations[index] / 60) + ':' + ('0' + Math.floor(durations[index] % 60)).slice(-2)
                    : '0:00'}
                </div>
              </div>
              <div className="ellipsis"><Ellipsis /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Liked
