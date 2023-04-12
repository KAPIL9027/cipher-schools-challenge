import {useState} from 'react'
import './Interest.css'
function Interest() {
  const [interests,setInterests] = useState(["Web Development","Android Development","Blockchain Development"]);
  return (
    <div className="interest-info">
    <div className="interest-top">
        <h3 className="interest-top-heading">Interests</h3>
        <button className="interest-btn">Change</button>
    </div>
    <div className="interest-bottom">

      {
        interests.map((interest)=>
        <div className="interest">{interest}</div>
        )
      }
    </div>
</div>
  )
}

export default Interest