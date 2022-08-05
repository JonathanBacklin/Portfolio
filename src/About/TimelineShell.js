import React from 'react'

const TimelineShell = (props, { key }) => {
  return (
    <li key={key}>
      <div className="content">
        <h3>{props.title}</h3>
        <h4>{props.occupation}</h4>
        <p>{props.description}
        </p>
      </div>
      <div className="time">
        <h4>{props.timespan}</h4>
      </div>
    </li>
  )
}

export default TimelineShell