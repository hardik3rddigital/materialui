import React, { useState } from "react";
import { Select,MenuItem } from "@mui/material";

function MaterialUISelect() {

   const [selectOption,setSelectOption] = useState(""); 

   const SelectValue = (event,selectVal) => {
    console.log(selectVal)
    setSelectOption(event.target.value)
   }
  return (
    <>
      <h2>MaterialUI - Select</h2>
      <h4>MaterialUI - Basic Select</h4>
      <div className="" style={{}} >
        <Select label="Option" value={selectOption} displayEmpty onChange={SelectValue}>
            <MenuItem value="">Option</MenuItem>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
            <MenuItem value="Option 4">Option 4</MenuItem>
        </Select>
      </div>
    </>
  );
}

export default MaterialUISelect;
