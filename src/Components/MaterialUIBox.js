import React from "react";
import { Box } from "@mui/material";

function MaterialUIBox() {
  return (
    <>
      <div className="">
        <h2>MaterialUI - Box</h2>
        <h4>MaterialUI - Basic Box</h4>
        <Box>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </Box>
        <h4>MaterialUI - Box convert into span</h4>
        <Box component="span">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </Box>
        <h4>MaterialUI - Box convert into span - clone</h4>
        <Box component="span" style={{ color: "red" }} clone>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </Box>
        <h4>MaterialUI - Box convert into span - margin</h4>
        <Box style={{ color: "red" }} clone mt={2}>
          Lorem Ipsum is simply dumm
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </Box>
      </div>
    </>
  );
}

export default MaterialUIBox;
