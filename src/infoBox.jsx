import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/black-rain-abstract-dark-power-1-1.jpg?w=900";
  return (
    <div className="infobox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title={info.weather} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {info.temp} °C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather: {info.weather}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels Like: {info.feelsLike} °C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {info.humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temperature: {info.tempMax} °C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temperature: {info.tempMin} °C
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
