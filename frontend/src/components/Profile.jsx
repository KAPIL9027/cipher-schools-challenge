import React from 'react';
import './Profile.css';
import { Avatar } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function Profile() {
  return (
    <div className="profile-user">
    <div className="profile">
        <div className="profile-left">
         <div className="profile-logo">
            <Avatar className="profile-avatar"/>
            <div className="edit-btn">
                <EditOutlinedIcon/>
            </div>
         </div>
         <div className="profile-text">
            <p className="text">Hello,</p>
            <h1 className="user-name">Kapil.</h1>
            <p className="text email">sharmaakapil01@gmail.com</p>
         </div>
        </div>
        <div className="profile-right">
         <p className="followers">0 Followers</p>
        </div>
    </div>
    </div>
    
  )
}

export default Profile