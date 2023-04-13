import {useEffect} from 'react'
import './CipherMap.css';


function CipherMap() {
  useEffect(()=>{
    const squares = document.querySelector('.squares');
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);  
      squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    }
  },[]);
  return (
    <div className="cipher-map-info">
        <h4 className="cipher-heading">Cipher Map</h4>
        <div className="cipher-bottom">
        <div className="graph">
    <ul className="months">
      <li>Jan</li>
      <li>Feb</li>
      <li>Mar</li>
      <li>Apr</li>
      <li>May</li>
      <li>Jun</li>
      <li>Jul</li>
      <li>Aug</li>
      <li>Sep</li>
      <li>Oct</li>
      <li>Nov</li>
      <li>Dec</li>
    </ul>
    <ul className="days">
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
    <ul className="squares">
     
    </ul>
  </div>
        </div>
    </div>
  )
}

export default CipherMap