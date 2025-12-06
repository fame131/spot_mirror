import React, { useRef, useState } from 'react'
import "./recent.css"
import songs from '../../../public/songs/datas/songs'
import { Play, Pause, Plus } from 'lucide-react'
import artist from '../../../public/songs/datas/artist'


const Recent = ({ playingIndex, handleClick, handlePreview }) => {

  const [background, setBackground] = useState('yellow')
  const btn = useRef([])
  const playBtns = useRef([])
  const [follow, setFollow] = useState(Array(artist.length).fill(false))
  const followRef = useRef([])



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

  const handleFollowOver = (index) => {
    const followBtn = followRef.current[index]
    setFollow(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    }
    )
    followBtn.classList.add('width-inc')
  }

  const handleMouseOut = (index) => {
    const followBtn = followRef.current[index]
    followBtn.classList.remove('width-inc')

    setFollow(prev => {
      const newState = [...prev]
      newState[index] = false
      return newState
    })
  }


  return (
    <div>
      <div className="recents">
        <div className="head-artists">
          Artists
        </div>
        <div className="recent-songs">
          {
            songs.slice(0, 11).map((song, index) => {

              if (index == 8 || index == 9 || index == 10) return null
              return (
                <div key={index} className="recent-card" ref={(el) => (btn.current[index] = el)} onMouseOver={() => {
                  handleBg(song.bg)
                  handleList(index)
                }}
                  onMouseLeave={() => handleListRem(index)
                  }
                >
                  <div className="profiles">
                    <img src={artist[index]?.artist} alt="" className="recent-img" />
                    <div className="artist-name-rec">{artist[index]?.name}</div>
                  </div>
                  <div className="follow-button" ref={el => (followRef.current[index] = el)} onMouseEnter={() => handleFollowOver(index)}
                    onMouseLeave={() => handleMouseOut(index)}
                  >
                    {follow[index] ?
                      (
                        <div className="follow">Follow</div>
                      ) : (
                        <Plus size={18} color='black' fill='black' />
                      )
                    }
                  </div>
                </div>
              )


            })
          }</div>
      </div>
    </div>
  )
}

export default Recent
