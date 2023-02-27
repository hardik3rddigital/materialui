import React from "react";
import { Grid, Hidden } from "@mui/material";

function MaterialUIHidden() {
  return (
    <>
      <h2>MaterialUI - Hidden</h2>
      <h4>MaterialUI - Basic Hidden</h4>
      <Grid container spacing={2} item>
        <Grid item lg={3}>
          Large 3
        </Grid>
        <Grid item lg={3}>
          Large 3
        </Grid>
        <Grid item lg={3}>
          <Hidden only="xs" style={{ flex: 1 }}>
            <span>XS 3 Hidden</span>
          </Hidden>
        </Grid>

        <Grid item lg={3}>
          Large 3
        </Grid>
      </Grid>
    </>
  );
}

export default MaterialUIHidden;
