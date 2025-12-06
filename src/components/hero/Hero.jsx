import "./hero.css"
import Playlist from '../playlists/Playlist'
import Details from '../details/Details'
import songs from '/public/songs/datas/songs'
import { Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'
import Navigation from "../navigation/Navigation"
import Recent from "../recent plays/Recent"
import { Link } from "react-router-dom"
import Controls from "../controls/Controls"
import { useEffect } from "react"
import album from "../../../public/songs/datas/album"
import { ArrowBigRight, ArrowBigLeft } from "lucide-react"



const Hero = ({ groups, setLists, displayState, setDisplayState, theData, setTheData, setLikedMusic, handleClick, playRef, playingIndex, first, userName, setFirst }) => {

  const posterRef = useRef([])
  const uploaded = useRef([])
  const displayRef = useRef([])
  const buttonRef = useRef([])
  const [leftArrow, setLeftArrow] = useState(false)
  const [prevPlay, setPrevPlay] = useState(null)

  const [pixels, setPixels] = useState(0)


  const handleData = (datas) => {
    setTheData(datas)
  }



  const displayName = userName || localStorage.getItem('username') || 'Guest';

  useEffect(() => {
    setDisplayState(displayName)
    const firstLetter = displayName?.[0] || 'G'
    localStorage.setItem('userLetter', firstLetter)
    setFirst(firstLetter)
  }, [displayName, setFirst])


  const [previewSong, setPreviewSong] = useState(null)


  const handlePreview = (song) => {
    setPreviewSong(song)
  }

  const handleHover = (index) => {
    buttonRef.current[index]?.classList.add('visible')
  }

  const handleMouseLeave = (index) => {
    buttonRef.current[index]?.classList.remove('visible')
  }

  const handleList = (albums) => {
    setLists(albums)
  }

  const handleMove = () => {
    setPixels(pixels + 1000)
  }

  const handleMoveLeft = () => {
    setPixels(prev => prev - 1000)
  }

  const handlePlay = (index) => {
    const song = uploaded.current[index]

    if (!uploaded) return

    if (prevPlay === index) {
      song.pause()
      setPrevPlay(null)
      return
    }

    if (prevPlay !== null) {
      uploaded.current[prevPlay].pause()
      uploaded.current[prevPlay].currentTime = 0
    }

    song.play()
    setPrevPlay(index)
  }

  const handleOver = (index) => {
    const displayBtn = displayRef.current[index]

    displayBtn.classList.add('btn-display')
  }

  const handleLeave = (index) => {
    const displayBtn = displayRef.current[index]

    displayBtn.classList.remove('btn-display')
  }

  return (
    <div>
      <Recent playingIndex={playingIndex} handleClick={handleClick} handlePreview={handlePreview} />
      <div className='hero'>
        <Navigation setFirst={setFirst} userName={userName} first={first} handleClick={handleClick} playingIndex={playingIndex} handlePreview={handlePreview} setLikedMusic={setLikedMusic} />
        <Playlist />
        <div className="hero-cont">
          <div className="suggested">Suggested for {displayState}</div>
          {songs.slice(0, 12).map((song, index) => (
            <Link to={'/song'} className="song-cont" key={index}
              onClick={() =>
                handleData({
                  image: song.image,
                  name: song.name,
                  artist: song.artist,
                  Genre: song.Genre,
                  Release: song.Release,
                  Album: song.Album,
                  Sound: song.Sound,
                  Theme: song.Theme,
                  Inspiration: song.Inspiration,
                  bg: song.bgCol,
                  song: song.song,
                  type: song.type
                })}>
              <audio src={song.song} ref={(el) => (playRef.current[index] = el)} />

              <div
                className="img-cont"
                ref={(el) => (posterRef.current[index] = el)}
                onMouseOver={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img src={song.image} className="poster" />
              </div>

              <div className="name-song">{song.name}</div>
              <div className="name-auth">{song.artist}</div>

              <button
                className="play-btn"
                ref={(el) => (buttonRef.current[index] = el)}
                onMouseOver={() => handleHover(index)}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(index);
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
                }}


              >
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
            </Link>
          ))}
        </div>
        <Controls />
      </div>

      <h1 className="album-head">Albums</h1>
      <div className="arrow-btn" onClick={() => handleMove()}><ArrowBigRight color="white" fill="white" /></div>
      <div className={pixels == 0 ? 'arrow-left' : 'displayed'} onClick={() => handleMoveLeft()}><ArrowBigLeft color="white" fill="white" /></div>
      <div className="albums">
        <div className="album-sub" style={{ transform: `translateX(-${pixels}px)`, transition: '0.3s ease' }}>
          {
            album.map((albums) => (
              <Link to={'/album'} className="card-album"
                onClick={() => handleList(albums)}
              >
                <img src={albums.image} className="albums-image" />
                <div className="names-album">
                  <div className="name-album">{albums.Album}</div>
                  <div className="artist-album">{albums.artist}</div>
                </div>
              </Link>
            ))
          }

        </div>
      </div>

      <div className="recently">Recently uploaded</div>

      <div className="uploaded">
        {
          groups.map((group, index) => (
            <div>
              <div className="song-cont-2"
                onMouseEnter={() => handleOver(index)}
                onMouseLeave={() => handleLeave(index)}
              >
                <img src={group.coverURL} className="poster-2" />
                <audio src={group.trackURL} ref={el => { uploaded.current[index] = el }}></audio>
                <div className="btn-play"
                  onClick={(e) => {
                    e.preventDefault()
                    handlePlay(index)
                  }}>
                  {prevPlay == index ?
                    (
                      <Pause className="play-display" color="white" fill='white' ref={el => displayRef.current[index] = el} />
                    ) : (
                      <Play className="play-display" color="white" fill='white' ref={el => displayRef.current[index] = el} />
                    )

                  }
                </div>

                <div className="music-track-name">
                  {group.trackName}
                </div>
                <div className="artist-track">
                  {group.artist}
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Hero
