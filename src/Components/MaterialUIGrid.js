import React from "react";
import { Grid } from "@mui/material";
function MaterialUIGrid() {
  return (
    <>
      <h2>MaterialUI - Grid</h2>
      <h4>MaterialUI - Basic Grid</h4>
      <Grid item container spacing={2} xl={12}>
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
