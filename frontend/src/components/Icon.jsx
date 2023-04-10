import React from 'react'
import './Icon.css'
function Icon({ImageIcon,title}) {
  return (
    <div className="image__option">
     <ImageIcon className="icon"/>
    <p className="icon-text">{title}</p>
    </div>
    
  )
}

export default Icon