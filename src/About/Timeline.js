import React from 'react'
import './CSS/Timeline.css'
import { aboutInfo } from '../JSON/DevInfo'
import TimelineShell from './TimelineShell'
const Timeline = () => {
  return (
    <div>
      <div className="timeline ">
        <ul>
          {aboutInfo.map(x =>
            <TimelineShell {...x} />
          )}
          <div style={{ clear: 'both' }}></div>
        </ul>
      </div>
    </div >
  )
}

export default Timeline