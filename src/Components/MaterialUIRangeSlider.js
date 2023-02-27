import React,{useState} from "react";
import { Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function MaterialUIRangeSlider() {
  const [range,setRange] = useState([40,240])
  
  const ChangeRangeSlider = (event,rangevalue) => {
    setRange(rangevalue)
  }
  return (
    <>
      <h2>MaterialUI - RangeSlider</h2>
      <h4>MaterialUI - RangeSlider - Basic Slider</h4>
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
      <h4>MaterialUI - RangeSlider - Between</h4>
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
        <Slider value={range} onChange={ChangeRangeSlider} max={400} valueLabelDisplay="auto" />
        <VolumeUpIcon color="primary" />
      </div>
    </>
  );
}

export default MaterialUIRangeSlider;
