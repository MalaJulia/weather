import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import cities from "../../constants/cities";
import { useSearchParams } from "react-router-dom";
import queryParams from "../../constants/queryParams";
import Box from "@mui/material/Box";
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import {useEffect, forwardRef} from "react";
import Selects from "./Selects";

const SelectForm = () => {
  const [query, setQuery] = useSearchParams(queryParams);
  // const TestCitie = () =>
  //   Object.entries(cities).map(([citiName, citiText]) => (
  //     <MenuItem key={citiName} value={citiName}>
  //       {citiText}
  //     </MenuItem>
  //   ));
  const handleCitiChange = (event) => {
    console.log(event, "event");
    const { value } = event.target;
    queryParams.q = value;

    setQuery(() => queryParams);
  };

  return (

    <Box  sx={{
      p: 5,
      margin: 'auto',
      display: "flex",
      justifyContent:'center'
    }}>

      {/*<FormControl sx={{ minWidth: 100 }}>*/}
      {/*  <InputLabel id="cities">Oберіть місто</InputLabel>*/}
       <Selects/>
        <CustomSelect
          sx={{ width: "300px" }}
          variant="standard"
          labelId="demo-simple-select-label"
          id="cities"
          name= 'cities'
          value={query.get('q')}
          label="Micто"
          onChange={handleCitiChange}
        >
          {Object.entries(cities).map(([citiName, citiText]) => (
            <StyledOption key={citiName} value={citiName}>
              {citiText}
            </StyledOption>
          ))}
        </CustomSelect>
      {/*</FormControl>*/}
    </Box>
  );
};
export default SelectForm;
