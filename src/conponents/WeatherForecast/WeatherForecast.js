import {Grid, Paper, Typography} from "@mui/material";

const WeatherForecast = ({weatherF, temp, info, wind})=> {
const icon = `http://openweathermap.org/img/wn/${weatherF.icon}@2x.png`

    return (<Paper
        sx={{
            p: 5,
            margin: 'auto',
            maxWidth: 600,
            maxHeight:700,
            // flexGrow: 1,
       backgroundColor:'azure'
        }}>
        <Grid container spacing={2}>
<Grid item>
            <img src={icon}/>
    <Typography variant="body2">
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

    </Paper>)
}
export default WeatherForecast

    //
    // <Paper
    //     sx={{
    //         p: 2,
    //         margin: 'auto',
    //         maxWidth: 500,
    //         flexGrow: 1,
    //         backgroundColor: (theme) =>
    //             theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     }}
    // >
    //     <Grid container spacing={2}>
    //         <Grid item>
    //             <ButtonBase sx={{ width: 128, height: 128 }}>
    //                 <Img alt="complex" src="/static/images/grid/complex.jpg" />
    //             </ButtonBase>
    //         </Grid>
    //         <Grid item xs={12} sm container>
    //             <Grid item xs container direction="column" spacing={2}>
    //                 <Grid item xs>
    //                     <Typography gutterBottom variant="subtitle1" component="div">
    //                         Standard license
    //                     </Typography>
    //                     <Typography variant="body2" gutterBottom>
    //                         Full resolution 1920x1080 • JPEG
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                         ID: 1030114
    //                     </Typography>
    //                 </Grid>
    //                 <Grid item>
    //                     <Typography sx={{ cursor: 'pointer' }} variant="body2">
    //                         Remove
    //                     </Typography>
    //                 </Grid>
    //             </Grid>
    //             <Grid item>
    //                 <Typography variant="subtitle1" component="div">
    //                     $19.00
    //                 </Typography>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // </Paper>