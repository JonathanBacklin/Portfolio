// import { aboutInfo } from "../JSON/DevInfo"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TimelineCard = ( {card} ) => {
  return (
    <Grid item xs={8} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="Timeline-title">{card.title}</Typography>
          <Typography variant="h6" color={"text.secondary"} className="Timeline-occopation">{card.occupation}</Typography>
          <Typography variant="body2" color="text.secondary" className="Timeline-description">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* <div className="Timeline-card">
        <h1 className="Timeline-title">{card.title}</h1>
        <h2 className="Timeline-ocupation">{card.occupation}</h2>
        <p className="Timeline-description" style={{color:"white"}}>{card.description}</p>
      </div> */}
    </Grid>
  )
}

export default TimelineCard