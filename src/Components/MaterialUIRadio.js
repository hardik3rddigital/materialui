import React, { useState } from "react";
import { Radio } from "@mui/material";

function MaterialUIRadio() {
  const [radioValue, setradioValue] = useState("Male");
  const [radioValue2, setradioValue2] = useState("");

  const RadioChange = (event) => {
    let RadioData = radioValue;
    RadioData = event.target.value;
    console.log(RadioData);
    //setradioValue(RadioData)

    setradioValue(RadioData);
  };

  const SelectOne = (event) => {
    let RadioData = radioValue2;
    RadioData = event.target.value;
    console.log(RadioData);
    //setradioValue(RadioData)

    setradioValue2(RadioData);
  };

  return (
    <>
      <h2>MaterialUI - Radio</h2>
      <div className="">
        <Radio
          value="Male"
          color="default"
          onChange={RadioChange}
          checked={radioValue === "Male"}
        />
        <span>Male</span>
      </div>
      <div className="">
        <Radio
          value="Female"
          color="primary"
          onChange={RadioChange}
          checked={radioValue === "Female"}
        />
        <span>Female</span>
      </div>

      <h4>MaterialUI - Radio(onChange Event)</h4>
      <div className="">
        <Radio
          value="Radio 1"
          color="primary"
          onChange={SelectOne}
          checked={radioValue2 === "Radio 1"}
        />
        <span>Radio 1</span>
      </div>
      <div className="">
        <Radio
          value="Radio 2"
          color="primary"
          onChange={SelectOne}
          checked={radioValue2 === "Radio 2"}
        />
        <span>Radio 2</span>
      </div>
      <div className="">
        <Radio
          value="Radio 3"
          color="primary"
          onChange={SelectOne}
          checked={radioValue2 === "Radio 3"}
        />
        <span>Radio 3</span>
      </div>
    </>
  );
}

export default MaterialUIRadio;
