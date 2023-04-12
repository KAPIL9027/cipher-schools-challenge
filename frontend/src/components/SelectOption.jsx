import React from 'react'
import './SelectOption.css';
function SelectOption({title,values}) {
  return (
    <div className="selection">
    <label className="selection-title" htmlFor={title}>{title}</label>
    <div className="selection__input">
    <select name={title} id={title}>
  {
    values.map((value) => (
      <option key={value} className="select-option" id={value} value={value}>{value}</option>
    ))
  }
</select>
    </div>
    </div>
  )
}

export default SelectOption