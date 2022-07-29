import React from 'react'
import './CSS/Transitions.css'
import Svg from './Svg';

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
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
      <h1>CODE IS POWER</h1>
      <Svg variants={icon}
        initial={icon.hidden}
        animate={icon.visible}
        transition={transition}
        height={200}
        width={200}
        className={"item"}
        color={"currentColor"}
      />
      {/* <motion.svg
        height={50}
        width={50}
        viewBox="0 0 100 100"
        className="item"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
      </motion.svg> */}

    </div >
  )
}

export default Transition