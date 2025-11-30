import React from 'react'
import './own.css'

const Own = ({ groups }) => {
  return (
    <div className='tracks-cont'>
      {groups && groups.length > 0 ? (
        groups.map((group) => (
          <div className="fetch-card" key={group.id}>
            {group.coverUrl && <img src={group.coverUrl} className='fetch-image' alt={group.trackName} />}
            {group.trackUrl && <audio src={group.trackUrl}  />}
            <div className="track-name-own">{group.trackName}</div>
          </div>
        ))
      ) : (
        <p>No tracks available</p>
      )}
    </div>
  )
}

export default Own
