import React from 'react';
import './Dashboard.css';
import About from './About';
import CipherMap from './CipherMap';
import Web from './Web';
import PersonalInfo from './PersonalInfo.jsx';
function Dashboard() {
  return (
    <div className="dashboard">
     <About/>
     <CipherMap/>
     <Web/>
     <PersonalInfo/>
    </div>
  )
}

export default Dashboard