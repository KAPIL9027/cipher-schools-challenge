import React from 'react'
import './PersonalInfo.css';
import SelectOption from './SelectOption';
function PersonalInfo() {
  return (
    <div className="personal-info">
        <div className="personal-top">
            <h3 className="personal-top-heading">PERSONAL INFORMATION</h3>
            <button className="personal-btn">Edit</button>
        </div>
        <div className="personal-bottom">
         {/* <SelectOption title="Highest Education" values={["Primary","Secondary","Higher Secondary","Graduation","Post Graduation"]}/> */}
        </div>
    </div>
  )
}

export default PersonalInfo