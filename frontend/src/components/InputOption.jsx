import React from 'react'
import './InputOption.css';
function InputOption({title,ImageIcon}) {
  return (
    <div className="input-option">
        <h4 className="input-option-heading">{title}</h4>
        <div className="input__option__container">
            <ImageIcon className="image-icon"/>
            <input placeholder={title} className="input__text" type="text"/>
        </div>
    </div>
  )
}

export default InputOption