import React from 'react'
import './manage.css'
import { Edit, Music, Heart, Upload, Download, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'

const Manage = ({ userName, email }) => {

  const letter = userName[0]

  return (
    <div>
      <div className="first-sec">
        <div className="sub">
          <div className="name-profile">{userName}</div>
          <div className="edit"><Edit size={20} /></div>
          <div className="profile">
            <div className="letter">{letter}</div>
          </div>
        </div>
        <div className="email-text">{email}</div>
        <div className="changes">
          <div className="see">see your password</div>
          <div className="pass-change">change password</div>
          <div className="log-out">Log out</div>
        </div>

      </div>

      <div className="sec-section">
        <Link to={'/tracks'} className="your">
          <div className="icons-set">
            <Music />
          </div>Your Tracks</Link>
        <Link to={'/liked'} className="liked-playlist">
          <div className="icons-set">
            <Heart />
          </div>
          Liked Tracks</Link>
        <Link to={'/upload'} className="upload">
          <div className="icons-set">
            <Upload />
          </div>
          Upload Track</Link>
        <div className="downloaded">
          <div className="icons-set">
            <Download />
          </div>
          Dowloaded Tracks</div>
        <div className="themes">
          <div className="icons-set">
            <Palette />
          </div>
          Themes</div>
      </div>
    </div>
  )
}

export default Manage
