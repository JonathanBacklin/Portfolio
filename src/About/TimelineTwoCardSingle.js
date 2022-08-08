import { aboutInfo } from "../JSON/DevInfo"
import Grid from '@mui/material/Grid';

const TimelineCard = ( {card} ) => {
  return (
    <Grid item xs={8} md={3}>
      <div className="Timeline-card">
        <h1 className="Timeline-title">{card.title}</h1>
        <h2 className="Timeline-ocupation">{card.occupation}</h2>
        <p className="Timeline-description" style={{color:"white"}}>{card.description}</p>
      </div>
    </Grid>
  )
}

export default TimelineCard