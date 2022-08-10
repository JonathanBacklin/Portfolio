import React from 'react';
import Grid from '@mui/material/Grid';

const TimelineCard = ( { card, index} ) => {
  return (
    <Grid item xs={8} md={3} key={index} style={{margin:"0 15px"}}>
      <div className="Card-container">
        <div className="Card-content">
          <div className="Card-title">
            <h1>{card.title}</h1>
          </div>
          <div className="Card-occupation">
            <h2>{card.occupation}</h2>
          </div>
          <div className="Card-description">
            <h4>{card.description}</h4>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default TimelineCard