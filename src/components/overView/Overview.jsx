import React, { useEffect, useState, useRef } from 'react'
import Details2 from '../dets/Details2'
import './overview.css'
import Controls from '../controls/Controls'
import Navigation from '../navigation/Navigation'
import { Play, Pause, CirclePlus, Ellipsis, CircleArrowDown, CircleArrowDownIcon, Shuffle, CircleCheck } from 'lucide-react'



const Overview = (props) => {

  const playRef = useRef([])

  const [display, setDisplay] = useState(false)

  const [bgColor, setBgColor] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [dets, setDets] = useState(null)
  const [added, setAdded] = useState(false)


  useEffect(() => {
    if (props.theData) {
      setBgColor(props.theData.bg);
    }
  }, [props.theData]);

  const handlePlay = () => {

    if (!playRef.current) return

    if (isPlaying) {
      playRef.current.pause()
      setIsPlaying(false)
    }

    else {
      playRef.current.play()
        .then(() => setIsPlaying(true))
    }
  }

  useEffect(() => {
    handlePre({
      image: props.theData.image,
      name: props.theData.name,
      artist: props.theData.artist,
      Genre: props.theData.Genre,
      Release: props.theData.Release,
      Album: props.theData.Album,
      Sound: props.theData.Sound,
      Theme: props.theData.Theme,
      Inspiration: props.theData.Inspiration,

    })
  }, [])

  const handlePre = (song) => {
    setDets(song)
  }

const handleAdd = (song) => {
  if (added) {
  
    props.setLikeAdded([]);
    setAdded(false);
  } else {

    props.setLikeAdded((prev) => [...prev,song]);
    setAdded(true);
  }
};



  return (
    <div>



      <div className="over-cont">
        <div className="hero-over" style={{ background: `linear-gradient(to bottom, ${bgColor}, black)` }}>
          <img src={props.theData.image} className='over-img' />
          <div className="type">{props.theData.type}</div>
          <div className="names-over">
            <div className="name-over">{props.theData.name}</div>
            <img src={props.theData.artistImg} className="artist-img" />
            <div className="artist-over">{props.theData.artist}</div>
          </div>
        </div>

        <div className="music-section">

          <div className="upper-part">
            <button className="play-music-btn" onClick={() => {
              handlePlay()
              setDisplay(!display)
            }}>
              {
                display ? (
                  <Pause size={22} className='play-over-music' fill='black' color='black' />
                ) : (
                  <Play size={22} className='play-over-music' fill='black' color='black' />
                )
              }
            </button>
            <Shuffle />
            <CircleArrowDownIcon />
            <button className="add-liked" onClick={() => handleAdd({
                      image: props.theData.image,
                      name: props.theData.name,
                      artist: props.theData.artist,
                      Genre: props.theData.Genre,
                      Release: props.theData.Release,
                      Album: props.theData.Album,
                      Sound: props.theData.Sound,
                      Theme: props.theData.Theme,
                      Inspiration: props.theData.Inspiration,
                      song: props.theData.song
            })}>
              {added ?
                (
                  <CircleCheck color='black' fill='green'/>
                ) : (
                  <CirclePlus color='white' />
                )
              }
            </button>
            <Ellipsis />

          </div>

          <div className="music-card"
          >
            <div className="music-stuffs">
              <button className="play-music" onClick={() => {
                handlePlay()
                setDisplay(!display)
              }}>
                {
                  display ? (
                    <Pause size={20} className='play-over' fill='white' />
                  ) : (
                    <Play size={20} className='play-over' fill='white' />
                  )
                }
              </button>
              <img src={props.theData.image} className="music-sec-img" />
              <audio src={props.theData.song} ref={playRef}></audio>
              <div className="music-names">
                <div className="music-name">{props.theData.name}</div>
                <div className="music-artist">{props.theData.artist}</div>
              </div>
            </div>
            <div className="all-stuffs">

              <CirclePlus color='rgba(187, 170, 170, 0.8)' size={20} />

              <Ellipsis className='elli' color='rgba(187,170, 170 , 0.8)' />
            </div>
          </div>

        </div>

      </div>

      <Controls />

    </div>
  )
}

export default Overview
