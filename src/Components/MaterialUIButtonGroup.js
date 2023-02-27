import React from 'react'
import { Button,ButtonGroup } from "@mui/material";

function MaterialUIButtonGroup() {
  return (
    <>
        <h2>MaterialUI - Button Group</h2>
        <Button variant='outlined'>I Am MaterialUI Button</Button>
      <br />
      <br />

      <ButtonGroup color='secondary' variant='contained'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup color='secondary' variant='contained' orientation='vertical'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </>
  )
}

export default MaterialUIButtonGroup