import React from "react";
import FirstFile from "./Components/FirstFile";
import MaterialUIButton from "./Components/MaterialUIButton";
import MaterialUIButtonGroup from "./Components/MaterialUIButtonGroup";
import MaterialUICheckbox from "./Components/MaterialUICheckbox";
import MaterialUIRadio from "./Components/MaterialUIRadio";
import MaterialUISlider from "./Components/MaterialUISlider";
import MaterialUIRangeSlider from "./Components/MaterialUIRangeSlider";
import MaterialUISelect from "./Components/MaterialUISelect";
import MaterialUIInput from "./Components/MaterialUIInput";
import MaterialUISwitch from "./Components/MaterialUISwitch";
import MaterialUIBox from "./Components/MaterialUIBox";
import MaterialUIContainer from "./Components/MaterialUIContainer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <FirstFile />
        <MaterialUIButton />
        <MaterialUIButtonGroup />
        <MaterialUICheckbox />
        <MaterialUIRadio />
        <MaterialUISlider />
        <MaterialUIRangeSlider />
        <MaterialUISelect />
        <MaterialUIInput />
        <MaterialUISwitch />
        <MaterialUIBox />
        <MaterialUIContainer />
      </Container>
    </>
  );
}

export default App;
