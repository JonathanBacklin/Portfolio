import React from 'react'
import TimelineTwoCardSingle from './TimelineTwoCardSingle';
import Grid from '@mui/material/Grid';

const TimelineTwoCard = ( { selectedYear, index } ) => {
  return (
    <div className='Timeline-cards' key={index}>
      <Grid container spacing={2}>
        {selectedYear.map((e, index) => {
          return <TimelineTwoCardSingle card={e} key={index}/>
        })}
      </Grid>
    </div>
  )
}

export default TimelineTwoCard