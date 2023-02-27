import React, { useState } from "react";
import { Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function MaterialUISlider() {
  const DefaultSliderRange = '40'
  const [showValue,setshowValue] = useState(DefaultSliderRange);  

  const mark = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  const SliderRange = (event) => {
    console.log(event.target.value)
    setshowValue(event.target.value)
  };



  return (
    <>
      <h2>MaterialUI - Slider</h2>
      <h4>MaterialUI - Basic Slider</h4>
      <div
        className=""
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider />
        <VolumeUpIcon color="primary" />
      </div>
      <h4>MaterialUI - Slider Default Value</h4>
      <div
        className=""
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider defaultValue={44} />
        <VolumeUpIcon color="primary" />
      </div>
      <h4>MaterialUI - Slider Default Value, Steps</h4>
      <div
        className=""
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider defaultValue={44} step={22} />
        <VolumeUpIcon color="primary" />
      </div>
      <h4>MaterialUI - Slider Default Value, Steps, Marks</h4>
      <div
        className=""
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider defaultValue={40} step={20} marks={mark} />
        <VolumeUpIcon color="primary" />
      </div>
      <h4>
        MaterialUI - Slider Default Value, Steps, Marks, Show Slider Value
      </h4>
      <div
        className=""
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider
          defaultValue={40}
          step={20}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={SliderRange}
        />

        <VolumeUpIcon color="primary" />
      </div>
      <h4>
        MaterialUI - Slider Default Value, Steps, Marks, Show Slider Value,
        Orientation : vertical
      </h4>
      <div
        className=""
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <VolumeDownIcon color="primary" />
        <Slider
          defaultValue={DefaultSliderRange}
          step={20}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={SliderRange}
          orientation="vertical"
        />

        <VolumeUpIcon color="primary" />
        <div className="" style={{fontWeight:"Bold"
        }}>{showValue}</div>
      </div>
      
    </>
  );
}

export default MaterialUISlider;
