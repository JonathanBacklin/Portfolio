import React from 'react'
import './CSS/Transitions.css'
import Svg from './Svg';

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

const Transition2 = () => {
  return (
    <div className='Page-wrapper'>
      <div className="Transition Transition-one">

        <h1>build the website</h1>
        <Svg variants={icon}
          initial={icon.hidden}
          animate={icon.visible}
          transition={transition}
          height={50}
          width={80}
          className={"item"}
          color={""}
        />
      </div>
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

export default Transition2