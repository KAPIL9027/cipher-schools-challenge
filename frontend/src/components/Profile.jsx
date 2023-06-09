import {useState,useEffect,React} from 'react';
import './Profile.css';
import { Avatar } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function Profile() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');

  const onClick = (e)=>{
     const overlay = document.querySelector('.overlay');
     console.log("hi");
     overlay.classList.toggle('not-show');
  };
  return (
    <div className="profile-user">
      <div className="overlay not-show">
      <div className="profile-user-update">
       <div className="profile-user-update-top">
        <h4 className="profile-update-heading">Profile Update</h4>
        <div className="cross" onClick={onClick}>X</div>
       </div>
       <div className="profile-user-update-bottom">
        <div className="profile-user-update-left">
        <div className="profile-logo1">
            <Avatar className="profile-avatar-big"/>
            <div className="edit-btn update-edit">
                <EditOutlinedIcon/>
            </div>
         </div> 
        </div>
        <div className="profile-user-update-right">
          <form className="profile-update-form" method="GET" action="http://localhost:8080/api/login?_method=PUT"onSubmit={(e)=> {e.preventDefault();}}>
            <div className="firstname field">
            <label htmlFor="first" className="update-label">First Name</label>
            <input placeholder="First Name" onChange={(e)=> {setFirstName(e.target.value)}}type="text" className="update-input" name="firstname" id="first" value={firstName}
            />
            </div>
            <div className="lastname field">
            <label htmlFor="last"  className="update-label">Last Name</label>
            <input placeholder="Last Name"onChange={(e)=> {setLastName(e.target.value)}} type="text" className="update-input" name="lastname" id="last" value={lastName}/>
            </div>
            <div className="emailaddress field">
            <label htmlFor="email" className="update-label">Email Address</label>
            <input placeholder="Email Address"  type="email" className="update-input" name="email" id="email"  disabled/>
            </div>
            <div className="mobilenumber field">
            <label htmlFor="mobile" className="update-label">Mobile Number</label>
            <input placeholder="Mobile Number" type="email" className="update-input" name="mobile" id="mobile"/>
            </div>
            <div className="update-btns">
            <button className="update-btn submit" type="submit">Save</button>
            <button className="update-btn cancel" name="cancel" onClick={onClick}>Cancel</button>
            </div>
            
          </form>
        </div>
       </div>
      </div>
      </div>
    <div className="profile">
        <div className="profile-left">
         <div className="profile-logo">
            <Avatar className="profile-avatar"/>
            <div className="edit-btn" onClick={onClick}>
                <EditOutlinedIcon/>
            </div>
         </div>
         <div className="profile-text">
            <p className="text">Hello,</p>
            <h1 className="user-name">{firstName !== '' ? firstName : 'Kapil'}</h1>
            <p className="text email">{email !== '' ? email : 'sharmaakapil01@gmail.com'}</p>
         </div>
        </div>
        <div className="profile-right">
         <p className="followers">4 Followers</p>
        </div>
    </div> 
    </div>
  )
}

export default Profile