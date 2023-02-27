import React from "react";
import { Switch } from "@mui/material";

function MaterialUISwitch() {

    const SwitchValue = (event,eventReturn) => {
        console.log(event)
        console.log(eventReturn)
    }
  return (
    <>
      <h2>MaterialUI - Switch</h2>
      <h4>MaterialUI - Basic Switch</h4>
      <div className="">
        <Switch color="primary" onChange={SwitchValue}/>
      </div>
    </>
  );
}

export default MaterialUISwitch;
