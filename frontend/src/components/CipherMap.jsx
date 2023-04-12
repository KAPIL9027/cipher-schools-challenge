import React from 'react'
import './CipherMap.css';
import  map from './asset32.svg';
function CipherMap() {
  return (
    <div className="cipher-map-info">
        <h4 className="cipher-heading">Cipher Map</h4>
        <div className="cipher-bottom">
         <img className="cipher-map" alt="cipher-map" src={map}/>
        </div>
    </div>
  )
}

export default CipherMap