import React, { useState } from "react";
import { Tab, Tabs, AppBar } from "@mui/material";

function MaterialUITab() {
  const [value, setValue] = useState(0);

  const HandleTabs = (event, ReturnVal) => {
    console.log(event);
    console.log(ReturnVal);
    setValue(ReturnVal);
  };

  return (
    <>
      <h2>MaterialUI - Tab</h2>
      <h4>MaterialUI - Basic Tab</h4>
      <AppBar>
        <Tabs
          onChange={HandleTabs}
          value={value}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
      </AppBar>

      <TabPanel itemname="1" value={value} index={0}>
        List 1
      </TabPanel>
      <TabPanel itemname="2" value={value} index={1}>
        List 2
      </TabPanel>
      <TabPanel itemname="3" value={value} index={2}>
        List 3
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <h1>{children}</h1>}</>;
}

export default MaterialUITab;
