import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const Header = () => {
    return (
      <Box
        sx={{
          backgroundColor: "azure",
          paddingY: 1,
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Typography variant="overline">прогноз погоди на сьогодні</Typography>
      </Box>
    );
}
export default Header