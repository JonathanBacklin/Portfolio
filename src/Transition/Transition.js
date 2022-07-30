import React from 'react'
import './CSS/Transitions.css'
import Svg2 from './Svg2';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    // fill: "rgb(240, 32, 74, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // fill: "rgb(240, 32, 74, 1)"
  }
};

const transition = {
  default: { duration: 3, ease: "easeInOut" },
  fill: { duration: 3, ease: [1, 0, 0.8, 1] }
}


// HOW TO CREATE THE TRANSITION

// <motion.svg className={props.className} width = { props.width } height = { props.height }><motion.svg/>
// <motion.path variants={props.variants} initial={props.initial} animate={props.animate} transition={props.transition}/>

const Transition = () => {
  return (
    <div className='Page-wrapper'>
      <div className="Transition Transition-one">

        <h1>design the website</h1>

        <Svg2 variants={icon}
          initial={icon.hidden}
          animate={icon.visible}
          transition={transition}
          height={50}
          width={80}
          className={"item"}
          color={""}
        />
      </div >
    </div>
  )
}

export default Transition