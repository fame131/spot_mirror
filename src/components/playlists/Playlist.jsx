import React from 'react'
import "./playlist.css"
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Playlist = () => {
  return (
    <div>
      <div className="playlists-cont">
        <div className="plus-icon">+</div>
        <Link to={'/liked'} className="favs"><Heart size={30} color='white' /></Link>
        <div className="playlists"></div>
      </div>
    </div>
  )
}

export default Playlist
