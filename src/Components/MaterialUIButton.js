import React, { useState } from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MaterialUIButton() {
  const [color,setColor] = useState('outlined');

  const ClickMe = () => {
    console.log("Clicked")
    setColor('contained')
  };
  return (
    <>
      <h2>MaterialUI - Button</h2>
      <Button>I Am MaterialUI Button</Button>
      <br />
      <br />
      <Button variant="contained">I Am MaterialUI Button - contained</Button>
      <br />
      <br />
      <Button variant="contained" disabled>
        I Am MaterialUI Button - contained,disabled
      </Button>
      <br />
      <br />
      <Button onClick={ClickMe} variant={color}>
        I Am MaterialUI Button - outlined,Clicked Function
      </Button>
      <br />
      <br />
      <Button size="small" variant="outlined">
        I Am MaterialUI Button - outlined,small
      </Button> &nbsp;
      <Button size="medium" variant="outlined">
        I Am MaterialUI Button - outlined,medium
      </Button> &nbsp;
      <Button size="large" variant="outlined">
        I Am MaterialUI Button - outlined,large
      </Button>
      <br />
      <br />
      <Button startIcon={<AccountCircleIcon />} onClick={ClickMe} variant={color}>
        I Am MaterialUI Button - outlined,Clicked Function
      </Button>
      <br />
      <br />
    </>
  );
}

export default MaterialUIButton;
