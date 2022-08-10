import React, { useEffect, useState } from 'react'
import './CSS/TimelineTwo.css'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { aboutInfo } from '../JSON/DevInfo';
import TimelineTwoCards from './TimelineTwoCards';

const marks = [
  {
    value: 2018,
    label: "2018-2021",
  },
  {
    value: 2021,
    label: "2021-Present",
  },
  {
    value: 2022,
    label: "2022-Present",
  },
  {
    value: 2022,
    label: "2022-Present",
  },
];

const PrettoSlider = styled(Slider)({
  color: '#f0204a',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const TimelineTwo = () => {

  const [selectedYear, setSelectedYear] = useState([])

  const handleSliderChange = (event, value) => {
    setSelectedYear(aboutInfo.filter(e => {
      return value >= e.timeStart && value <= e.timeEnd
    }))
  }

  useEffect (() => {
    handleSliderChange('', 2018);
  }, []);

  return (
    <div className='Timeline-two-container'>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={2018}
        marks={marks}
        min={2018}
        max={2022}
        onChange={handleSliderChange}
      />
      <TimelineTwoCards selectedYear={selectedYear} />
    </div>
  )
}

export default TimelineTwo