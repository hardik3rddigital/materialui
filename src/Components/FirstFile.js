import React from "react";
import Button from "@mui/material/Button";

function FirstFile() {
  return (
    <>
      <h2>Fitst Material UI Components</h2>
      <button>Normal Button</button><br/>
      <Button color="primary">MUI Button</Button><br/>
      <Button variant="text">Text</Button><br/>
      <Button variant="contained">Contained</Button><br/>
      <Button variant="outlined">Outlined</Button><br/>
    </>
  );
}

export default FirstFile;
