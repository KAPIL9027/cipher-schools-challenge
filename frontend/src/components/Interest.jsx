import {useState} from 'react'
import './Interest.css'
function Interest() {
  
  return (
    <div className="interest-info">
    <div className="interest-top">
        <h3 className="interest-top-heading">Interests</h3>
        <button className="interest-btn">Change</button>
    </div>
    <div className="interest-bottom">
       <div className="interest">Web Development</div>
       <div className="interest">Android Development</div>
       <div className="interest">Blockchain Development</div>
       <div className="interest">Artifical Intelligence</div>
    </div>
</div>
  )
}

export default Interest