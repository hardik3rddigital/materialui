import React from "react";
import Button from "@mui/material/Button";

function FirstFile() {
  return (
    <>
      <button>Normal Button</button><br/>
      <Button color="primary">MUI Button</Button><br/>
      <Button variant="text">Text</Button><br/>
      <Button variant="contained">Contained</Button><br/>
      <Button variant="outlined">Outlined</Button><br/>
    </>
  );
}

export default FirstFile;
