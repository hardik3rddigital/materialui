import React, { useState } from 'react'
import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function MaterialUICheckbox() {
const [checkboxvalue,setCheckboxValue] = useState([]);

  const CheckBoxChange = (event) => {
    let data = checkboxvalue;
    data.push(event.target.value)
    console.log(data)

    setCheckboxValue(data)
  }


  

  return (
    <>
        <h2>MaterialUI - Checkbox</h2>

        <Checkbox color='default' value="DefaultCheckbox" onChange={CheckBoxChange}/>

        <Checkbox color='primary' value="PrimaryCheckbox" onChange={CheckBoxChange} />

        <Checkbox color='secondary' value="SecondaryCheckbox" onChange={CheckBoxChange} />

        <Checkbox color='secondary' value="IndeterminateCheckbox" onChange={CheckBoxChange} indeterminate />

        <Checkbox color='secondary' value="IndeterminateCheckbox" onChange={CheckBoxChange} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />}/>


    </>
  )
}

export default MaterialUICheckbox