import { useState, useEffect, useRef } from "react"
import "./navigation.css"
import { Download, Bell, Ellipsis, Home, CirclePlus, CircleCheck } from "lucide-react"
import songs from "../../../public/songs/datas/songs"
import { Play, Pause } from "lucide-react"
import { User } from "lucide-react"

const Navigation = ({ handleClick, playingIndex, handlePreview, setLikedMusic = () => { }, first , userName , setFirst}) => {

  const [display, setDisplay] = useState(false)
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState([])
  const [recent, setRecent] = useState([])
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const [isTick, setIsTick] = useState({})
  const tickRef = useRef([])
  const [displayState, setDisplayState] = useState(null)


  useEffect(() => {
    if (search.trim() === "") {
      setSearched([])
      return
    }

    const filteredSongs = songs.filter((song) => song.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || song.artist.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setSearched(filteredSongs)
  }, [search])


  const handleRecent = (recentSong) => {
    setRecent((prev) => [...prev, recentSong])
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setDisplay(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTick = (index) => {
    setIsTick((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const handleLiked = (song) => {
    setLikedMusic(prev => [...prev, song])
  }




  const displayName = userName || localStorage.getItem('username') || 'Guest';

  useEffect(() => {
    setDisplayState(displayName)
    const firstLetter = displayName?.[0] || 'G'
    localStorage.setItem('userLetter', firstLetter)
    setFirst(firstLetter)
  }, [displayName, setFirst])


  return (
    <div>
      <nav className="nav-bar">

        <div className="name">
          <div className="drop-down"><Ellipsis size={27} /></div>
          <div className="the-name">spotmirror</div></div>
        <div className="search-sec">
          <div className="home"><Home size={30} /></div>
          <input ref={inputRef} type="text" className="search" placeholder="Search for musics.." onChange={(e) => setSearch(e.target.value)} onClick={() => setDisplay(true)} />
        </div>
        <div className="navs">
          <a href="" className="downloads"><Download size={22} /></a>
          <a href="" className="notification"><Bell size={21} className="bell" /></a>
          {
            first ? (<a href="/manage" style={{ marginBottom: '4.5px', fontSize: '21px', marginRight: '3px' }} className="user">{first.toUpperCase()}</a>) : (<a href="/user" className="user"><User size={23} /></a>)
          }
        </div>
      </nav>

      <div ref={searchRef} className={display ? 'searches-cont' : 'invisible'}>
        <div className="recent-search">Recent search</div>
        <div className="searches">

          {
            search.length == 0 && recent.map((recents, index) => {
              const realIndex = songs.findIndex(song => song.name === recents.name)
              return (
                <div className="all-search" key={index}>
                  <div className="searches-poster">
                    <img src={recents.image} alt="" className="search-poster" />
                  </div>
                  <div className="all-name">
                    <div className="name-search">{recents.name}</div>
                    <div className="by">Song &bull; {recents.artist}</div>
                  </div>
                  <div className="player" onClick={() => {
                    handleClick(realIndex)
                    handlePreview({
                      image: recents.image,
                      name: recents.name,
                      artist: recents.artist,
                      Genre: recents.Genre,
                      Release: recents.Release,
                      Album: recents.Album,
                      Sound: recents.Sound,
                      Theme: recents.Theme,
                      Inspiration: recents.Inspiration,
                    })


                  }}>
                    {playingIndex == realIndex ?
                      (
                        <Pause size={23} color="white" fill="white" />
                      ) : (
                        <Play size={23} color="white" fill="white" />
                      )
                    }
                  </div>
                </div>
              )

            })
          }
          {

            search.length > 0 && searched.map((filtered, index) => {
              const realIndex = songs.indexOf(filtered)

              return (
                <div className="all-search" key={index}>
                  <div className="searches-poster">
                    <img src={filtered.image} alt="" className="search-poster" />
                  </div>
                  <div className="all-name">
                    <div className="name-search">{filtered.name}</div>
                    <div className="by">Song &#183; {filtered.artist}</div>
                  </div>
                  <div className="player" onClick={() => {
                    handleClick(realIndex)
                    handlePreview({
                      image: filtered.image,
                      name: filtered.name,
                      artist: filtered.artist,
                      Genre: filtered.Genre,
                      Release: filtered.Release,
                      Album: filtered.Album,
                      Sound: filtered.Sound,
                      Theme: filtered.Theme,
                      Inspiration: filtered.Inspiration,
                    })
                  }}>
                    {playingIndex == realIndex ?
                      (
                        <Pause size={23} color="white" fill="white" onClick={() =>
                          handleRecent({
                            image: filtered.image,
                            name: filtered.name,
                            artist: filtered.artist,
                            Genre: filtered.Genre,
                            Release: filtered.Release,
                            Album: filtered.Album,
                            Sound: filtered.Sound,
                            Theme: filtered.Theme,
                            Inspiration: filtered.Inspiration,
                          })} />
                      ) : (
                        <Play size={23} color="white" fill="white" />
                      )
                    }

                  </div>
                  <button className="add-playlist" ref={(el) => (tickRef.current[index] = el)} onClick={() => {
                    handleTick(index)
                    handleLiked({
                      image: filtered.image,
                      name: filtered.name,
                      artist: filtered.artist,
                      Genre: filtered.Genre,
                      Release: filtered.Release,
                      Album: filtered.Album,
                      Sound: filtered.Sound,
                      Theme: filtered.Theme,
                      Inspiration: filtered.Inspiration,
                      song: filtered.song

                    })
                  }}>
                    {isTick[index] ? (
                      <CircleCheck size={25} color="black" fill="green" />
                    ) : (
                      <CirclePlus size={20} color="gray" />
                    )

                    }
                  </button>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

export default Navigation
