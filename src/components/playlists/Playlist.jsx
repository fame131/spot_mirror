import React from 'react'
import "./playlist.css"
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Playlist = () => {
  return (
    <div>
      <div className="playlists-cont">
        <Link to={'/liked'} className="favs"><Heart size={20} color='black' fill='black' /></Link>
        <div className="plus-icon">+</div>
        <div className="playlists"></div>
      </div>
    </div>
  )
}

export default Playlist
