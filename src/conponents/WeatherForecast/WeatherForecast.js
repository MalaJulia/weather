import { Grid, Paper, Typography } from "@mui/material";

const WeatherForecast = ({ weatherF, temp, info, wind }) => {
  const icon = `http://openweathermap.org/img/wn/${weatherF.icon}@2x.png`;

  return (
    <Paper
      sx={{
        p: 5,
        margin: "auto",
        maxWidth: 600,
        maxHeight: 700,
        backgroundColor: "azure",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <img src={icon} />
          <Typography textAlign={"center"} variant="body2">
            {weatherF.description}
          </Typography>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {info.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Maксимальна температура: {Math.ceil(temp.temp_max)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Mінімальна температура: {Math.ceil(temp.temp_min)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Відчувається як: {Math.ceil(temp.feels_like)}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Швидкість вітру: {Math.ceil(wind.speed)} м/c
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default WeatherForecast;
