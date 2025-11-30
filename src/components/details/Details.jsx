import React from 'react'
import './details.css'


const Details = ({ song }) => {

  if(!song){
    return (
            <div className="details-cont">
                <div className="no-song">no song selelcted</div>
      </div>
    )
  }
  return (
    <div>
      <div className="details-cont">
        <div className="pos">
         <img src={song.image} className="post" />
        </div>
        <div className="names">
          <div className="name-art">{song.name}</div>
          <div className="name-artist">{song.artist}</div>
        </div>

        <div className="details">
          <div className="genre"><span className="what">Genre: </span> {song.Genre}</div>
          <div className="release"><span className="what">Release: </span>{song.Release}</div>
          <div className="album"><span className="what">Album: </span> {song.Album}</div>
          <div className="sound"><span className="what">Sound: </span> {song.Sound}</div>
          <div className="theme"><span className="what">Theme: </span>{song.Theme}</div>
          <div className="insp"><span className="what">Inspiration: </span>{song.Inspiration}</div>
        </div>
      </div>
    </div>
  )
}

export default Details
