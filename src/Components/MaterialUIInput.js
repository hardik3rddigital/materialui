import React, { useState } from "react";
import { TextField } from "@mui/material";

function MaterialUIInput() {
  const [keyvalue, setkeyvalue] = useState("");
  const KeyUpEvent = (e) => {
    setkeyvalue(e.target.value);
  };
  return (
    <>
      <h2>MaterialUI - Text Field</h2>
      <h4>MaterialUI - Basic Text Field</h4>
      <div className="" style={{}}>
        <h6>MaterialUI - Basic Text Field - Outlined</h6>
        <TextField variant="outlined" label="Enter Your Name" />
        <h6>MaterialUI - Basic Text Field - Filled</h6>
        <TextField variant="filled" label="Enter Your Name" />
        <h6>MaterialUI - Basic Text Field - Standard</h6>
        <TextField variant="standard" label="Enter Your Name" />
      </div>
      <h4>MaterialUI - Basic Text Field - Password</h4>
      <div className="" style={{}}>
        <TextField label="Enter Your Password" type="password" />
      </div>
      <h4>MaterialUI - Basic Text Field - Requied</h4>
      <div className="" style={{}}>
        <TextField
          label="Enter Your Name"
          type="text"
          required
          onChange={KeyUpEvent}
          value={keyvalue}
        />
      </div>
      <h4>MaterialUI - Basic Text Field - Multiline</h4>
      <h6>MaterialUI - Basic Text Field - Multiline</h6>
      <div className="" style={{}}>
        <TextField label="Enter Your Name" type="text" multiline />
      </div>
      <h6>MaterialUI - Basic Text Field - Multiline Placeholder</h6>
      <div className="" style={{}}>
        <TextField
          label="Enter Your Name"
          type="text"
          multiline
          placeholder="Placeholder"
        />
      </div>
      <h6>MaterialUI - Basic Text Field - Multiline Default Value</h6>
      <div className="" style={{}}>
        <TextField
          label="Enter Your Name"
          type="text"
          multiline
          placeholder="Placeholder"
          defaultValue="Default Value"
        />
      </div>
    </>
  );
}

export default MaterialUIInput;
