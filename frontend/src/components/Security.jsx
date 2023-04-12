import React from 'react'
import './Security.css'
function Security() {
  const onClick = ()=>{
    window.scrollTo(0,0);
    const overlay = document.querySelector('.overlay1');
    console.log("hi");
    overlay.classList.toggle('not-show');
  }
 
  return (
    <div className="security-info">
    <div className="overlay1 not-show">
          <div className="password-user-update">
          <form className="password-update-form" onSubmit={(e)=> {e.preventDefault()}}>
            <div className=" field">
            <label htmlFor="current" className="update-label">Current Password</label>
            <input placeholder="Current Password" type="password" className="update-input" name="current" id="current" />
            </div>
            <div className="field">
            <label htmlFor="last" className="update-label">New Password</label>
            <input placeholder="New Password"type="password" className="update-input" name="new" id="new" />
            </div>
            <div className="field">
            <label htmlFor="email" className="update-label">Confirm Password</label>
            <input placeholder="Confirm Password" type="password" className="update-input" name="confirm" id="confirm" />
            </div>
            <div className="update-btns">
            <button className="update-btn submit" type="submit">Save</button>
            <button className="update-btn cancel" name="cancel" onClick={onClick}>Cancel</button>
            </div>
          </form>
          </div>
      </div>
    <div className="security-top">
        <h3 className="security-top-heading">SECURITY & PASSWORD</h3>
        <button className="security-btn" onClick={onClick}>Change</button>
    </div>
    <div className="security-bottom">
       <label htmlFor="password"className="password-label">Password</label>
      <div className="security__input__container">
        <input className="inputPassword" name="password" type="password" placeholder='1234567890'/>
      </div>
    </div>
</div>
  )
}

export default Security