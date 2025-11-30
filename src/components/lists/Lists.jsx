import React from 'react'
import './lists.css'

const Lists = ({lists}) => {
  return (
    <div>
      <div className="al-cont">
     <img src={lists.wall} className="album-img" />
     <div className="als">
               <div className="genre"><span className="what">Genre: </span> {lists.Genre}</div>
          <div className="release"><span className="what">Release: </span>{lists.Release}</div>
          <div className="album"><span className="what">Album: </span> {lists.Album}</div>
          <div className="sound"><span className="what">Sound: </span> {lists.Sound}</div>
          <div className="theme"><span className="what">Theme: </span>{lists.Theme}</div>
          <div className="insp"><span className="what">Inspiration: </span>{lists.Inspiration}</div>
          </div>
     </div>
    </div>
  )
}

export default Lists
