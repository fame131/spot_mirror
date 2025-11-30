import React, { useEffect, useState } from 'react'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom'
import Overview from './components/overView/Overview'
import Liked from './components/liked/Liked'
import Details from './components/details/Details'
import Controls from './components/controls/Controls'
import { useRef } from 'react'
import User from './components/user/User'
import Lists from './components/lists/Lists'
import Playlist from './components/playlists/Playlist'
import Player from './components/player/Player'
import Manage from './components/manage/Manage'
import Upload from './components/upload/Upload'
import Own from './components/own/Own'
import { supabase } from './supabase'

const App = () => {

  const [allStuffs, setAllStuffs] = useState({})
  const [playingIndex, setPlayingIndex] = useState(null)
  const playRef = useRef([])
  const [likeAdded, setLikeAdded] = useState([])
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [first, setFirst] = useState('')
  const [displayState, setDisplayState] = useState(null)
  const [lists, setLists] = useState(null)
  const [groups, setGroups] = useState([])

  const handleClick = (index) => {
    const audio = playRef.current[index]

    if (!audio) return

    if (playingIndex === index) {
      audio.pause()
      setPlayingIndex(null)
      return
    }

    if (playingIndex !== null) {
      playRef.current[playingIndex].pause()
      playRef.current[playingIndex].currentTime = 0
    }

    audio.play()
    setPlayingIndex(index)
  }

  const [theData, setTheData] = useState(null)
  const [likedMusic, setLikedMusic] = useState([])

  useEffect(() => {
    if (allStuffs.name) {
      const userName = localStorage.setItem('username', allStuffs.name)
    }

    if (allStuffs.email) {
      const email = localStorage.setItem('email', allStuffs.email)
    }

  }, [allStuffs.name, allStuffs.email])



  const savedUserName = localStorage.getItem('username')
  const savedEmail = localStorage.getItem('email')

  const fetchFiles = async () => {
    const { data: files, error } = await supabase.storage
      .from('spotmirror')
      .list('', { limit: 100, sortBy: { column: 'name', order: 'asc' } })

    if (error) {
      console.error(error)
      return
    }

    const grouped = {}

    files.forEach((file) => {
      const match = file.name.match(/-([A-Za-z0-9-]+)\./)

      if (!match) return

      const id = match[1]

      if (!grouped[id])
        grouped[id] = { id, trackUrl: null, coverUrl: null }

      const publicUrl =
        supabase.storage.from('spotmirror').getPublicUrl(file.name).data.publicUrl

      if (file.name.startsWith('track-')) grouped[id].trackUrl = publicUrl
      if (file.name.startsWith('cover-')) grouped[id].coverUrl = publicUrl
    })

    setGroups(Object.values(grouped))
  }

  const fetchMetadata = async () => {
    try {
      const response = await fetch('http://localhost:5000/tracks')
      const data = await response.json()
      setGroups(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchFiles()
    fetchMetadata()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navigation
          first={first}
          userName={savedUserName}
          setFirst={setFirst}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Hero
                setLists={setLists}
                displayState={displayState}
                setDisplayState={setDisplayState}
                setFirst={setFirst}
                theData={theData}
                userName={savedUserName}
                first={first}
                setTheData={setTheData}
                setLikedMusic={setLikedMusic}
                handleClick={handleClick}
                playRef={playRef}
                playingIndex={playingIndex}
              />
            }
          />

          <Route
            path="/song"
            element={
              <>
                <Playlist />
                <Overview theData={theData} setLikeAdded={setLikeAdded} />
              </>
            }
          />

          <Route
            path="/liked"
            element={
              <>
                <Liked
                  displayState={displayState}
                  setDisplayState={setDisplayState}
                  likedMusic={likedMusic}
                  handleClick={handleClick}
                  setFirst={setFirst}
                  playRef={playRef}
                  likeAdded={likeAdded}
                  user={allStuffs}
                  userName={savedUserName}
                />
                <Details />
                <Controls />
              </>
            }
          />

          <Route
            path="/user"
            element={
              <User
                setAllStuffs={setAllStuffs}
                setPassword={setPassword}
                password={password}
                confirmPass={confirmPass}
                setConfirmPass={setConfirmPass}
              />
            }
          />

          <Route path="/album" element={
            <>
              <Playlist />
              <Lists lists={lists} />
              <Player lists={lists} />
            </>
          } />

          <Route path='/manage' element={
            <>
              <Manage userName={savedUserName} email={savedEmail} />
            </>
          } />

          <Route path='/upload' element={
            <>
              <Upload groups={groups} setGroups={setGroups} userName={savedUserName} />
            </>
          } />

          <Route path='/tracks' element={
            <>
              <Own groups={groups} />
            </>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
