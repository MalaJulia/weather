import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";

import queryParams from "../../constants/queryParams";
import cities from "../../constants/cities";
import { UnstyledSelectIntroduction } from "./Selects";

const SelectForm = () => {
  const [query, setQuery] = useSearchParams(queryParams);

  const handleCitiChange = (event, newValue) => {
    queryParams.q = newValue;
    setQuery(() => queryParams);
  };

  const defaultV = query.get("q");

  return (
    <Box
      sx={{
        p: 5,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UnstyledSelectIntroduction
        defaultValue={defaultV}
        onChange={handleCitiChange}
        cities={cities}
      />
    </Box>
  );
};
export default SelectForm;
