import React from 'react'
import TimelineTwoCardSingle from './TimelineTwoCardSingle';
import Grid from '@mui/material/Grid';

const TimelineTwoCard = ( { selectedYear } ) => {
  return (
    <div className='Timeline-cards'>
      <Grid container spacing={2}>
        {selectedYear.map(e => {
          return <TimelineTwoCardSingle card={e}/>
        })}
      </Grid>
    </div>
  )
}

export default TimelineTwoCard