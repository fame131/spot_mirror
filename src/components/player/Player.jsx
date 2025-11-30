import React, { useState } from 'react'
import './player.css'
import { CirclePlus, EllipsisVertical, Pause, Play } from 'lucide-react'
import { useRef } from 'react'


const Player = ({ lists }) => {

  const cardRef = useRef([])
  const audioRef = useRef([])

  const [play, setPlay] = useState(null)
  const [playing , setPlaying] = useState(false)



  const handleMove = (index) => {
    cardRef.current[index]?.classList.add('display')
  }

  const handleLeave = (index) => {
    cardRef.current[index]?.classList.remove('display')
  }

  const handleClick = (index) => {
    const audio = audioRef.current[index]
    if(!audio) return;

    if(play == index && playing){
      audio.pause()
      setPlaying(false)
      setPlay(null)
    } else{
      audioRef.current.forEach((a , i) => {
        if(a && i !== index){
          a.pause()
        }

        audio.play()
        setPlay(index)
        setPlaying(true)
      })
    }
  }


  if (!lists) return null

  return (
    <div>
      <div className="player-cont">
        <div className="inner-player">
          {
            lists.songs.map((names, index) => (
              <div className="card-al" onMouseOver={() => handleMove(index)}
                onMouseLeave={() => handleLeave(index)}
              >
                <img src={lists.image} alt="" className="al-image" />
                <div className="player" onClick={() => handleClick(index)}>
                  {play == index ?
                    (
                      <Pause color='white' size={23} fill='white' className='play' ref={(el) => (cardRef.current[index] = el)}
                      />
                    ) : (
                      <Play color='white' size={23} fill='white' className='play' ref={(el) => (cardRef.current[index] = el)}
                      />
                    )
                  }
                </div>
                <audio src={names.file} ref={(el) => (audioRef.current[index] = el)}></audio>
                <div className="name-albums">{names.name}</div>
                <div className="icons">
                  <CirclePlus size={18} color='rgba(255, 255, 250, 0.63)' />
                  <EllipsisVertical size={18} color='rgba(255, 255, 250, 0.63)' />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Player
