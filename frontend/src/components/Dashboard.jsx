import React from 'react';
import './Dashboard.css';
import About from './About';
import CipherMap from './CipherMap.jsx';
import Web from './Web';
import PersonalInfo from './PersonalInfo.jsx';
import Security from './Security';
import Interest from './Interest';
function Dashboard() {
  return (
    <div className="dashboard">
     <About/>
     <CipherMap/>
     <Web/>
     <PersonalInfo/>
     <Security/>
     <Interest/>
    </div>
  )
}

export default Dashboard