import React from 'react'
import { CirclePlay , CirclePause } from 'lucide-react'
import './controls.css'

const Controls = () => {
  return (
    <div>
          <div className="play-sec">
        <div className="music"></div>
        <div className="controls">
          <CirclePlay size={30} className='controls' />
        </div>
        <div className="vol"></div>
      </div>
    </div>
  )
}

export default Controls
