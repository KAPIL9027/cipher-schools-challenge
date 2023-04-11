import React from 'react'
import './SelectOption.css';
function SelectOption({title,values}) {
  return (
    <div className="selection">
    <h4 className="selection-title">{title}</h4>
     <FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    onChange={handleChange}
  >
    <MenuItem value={10}>{values.first}</MenuItem>
    <MenuItem value={20}>{values.second}</MenuItem>
    <MenuItem value={30}>{values.third}</MenuItem>
  </Select>
</FormControl>
    </div>
  )
}

export default SelectOption