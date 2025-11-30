import React, { useRef, useState } from 'react'
import "./recent.css"
import songs from '../../../public/songs/datas/songs'
import { Play , Pause } from 'lucide-react'


const Recent = ({playingIndex , handleClick , handlePreview}) => {

    const [background , setBackground] = useState('yellow')
    const btn = useRef([])
    const playBtns = useRef([])


    const handleBg = (bg) => {
        setBackground(bg)
    }

    const handleList = (index) => {
      btn.current[index]?.classList.add('hover')
      playBtns.current[index]?.classList.add('hover-btn')
    }

    const handleListRem = (index) => {
      btn.current[index]?.classList.remove('hover')
      playBtns.current[index]?.classList.remove('hover-btn')
    }


  return (
    <div>
        <div className="recent-songs">  
            {
            songs.slice(0,11).map((song , index) => {

                if( index == 8 || index == 9 || index == 10) return null
             return(
                <div key={index} className="recent-card"  ref={(el) => (btn.current[index] = el)} onMouseOver={() => {
                  handleBg(song.bg);
                 handleList(index)}}
                 onMouseLeave={() => handleListRem(index)
                 }
                 >
                <img src={song.image} className="recent-img" />
                    <div className="recent-name">{song.artist}</div>
                    <button className="player-btn"
                    ref={(el) => (playBtns.current[index]) = el}
                    onClick={() => {handleClick(index)
                        handlePreview({
                          image: song.image,
                          name: song.name,
                          artist: song.artist,
                          Genre: song.Genre,
                          Release: song.Release,
                          Album: song.Album,
                          Sound: song.Sound,
                          Theme: song.Theme,
                          Inspiration: song.Inspiration,
            });
                    }}>
                      
              {playingIndex === index ? (
                <Pause
                  size={20}
                  fill="black"
                  color="black"
                />
              ) : (
                <Play size={20} fill="black" color="black" />
              )}
                    </button>
                </div>
             )
                                    
                
})
        }</div>
      <div className="recents" style={{
                        background:`linear-gradient(to bottom , ${background} ,black 100%)`,
                        position: 'absolute',
                        top: '100px',
                        left: '120px',
                        borderRadius: '10px',
                        width: '70%',
                        height: '200px',
                        filter: 'brightness(20%)',
                }}>
      </div>
    </div>
  )
}

export default Recent
