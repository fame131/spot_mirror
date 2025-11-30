import React from 'react'
import './details.css'


const Details2 = ({ dets }) => {

  if(!dets){
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
         <img src={dets.image} className="post" />
        </div>
        <div className="names">
          <div className="name-art">{dets.name}</div>
          <div className="name-artist">{dets.artist}</div>
        </div>

        <div className="details">
          <div className="genre"><span className="what">Genre: </span> {dets.Genre}</div>
          <div className="release"><span className="what">Release: </span>{dets.Release}</div>
          <div className="album"><span className="what">Album: </span> {dets.Album}</div>
          <div className="sound"><span className="what">Sound: </span> {dets.Sound}</div>
          <div className="theme"><span className="what">Theme: </span>{dets.Theme}</div>
          <div className="insp"><span className="what">Inspiration: </span>{dets.Inspiration}</div>
        </div>
      </div>
    </div>
  )
}

export default Details2
