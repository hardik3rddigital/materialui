import React from "react";
import { Grid } from "@mui/material";
function MaterialUIGrid() {
  return (
    <>
      <h2>MaterialUI - Grid</h2>
      <h4>MaterialUI - Basic Grid</h4>
      <Grid item container xl={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          lg={6}
          md={7}
          sm={9}
          xs={12}
          item
          style={{ backgroundColor: "#774925" }}
        >
          Grid Title - Column 6
        </Grid>
        <Grid
          lg={6}
          md={5}
          sm={3}
          xs={12}
          item
          style={{ backgroundColor: "#774925" }}
        >
          Grid Title - Column 6
        </Grid>
      </Grid>
    </>
  );
}

export default MaterialUIGrid;
