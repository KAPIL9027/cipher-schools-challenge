import {useState} from 'react'
import './Interest.css'
function Interest() {
  const [interests,setInterests] = useState([]);
  const arr = ["Web Development","Android Development","Blockchain Development","Game Development",
  "Data Structures","Machine Learning","Data Science","Others"];
  const onClick = ()=>{
    window.scrollTo(0,0);
    const overlay = document.querySelector('.overlay2');
    console.log("hi");
    overlay.classList.toggle('not-show');
  }
  const onClick1 = (e)=>{
     e.target.classList.toggle('selected');
  }
  const onClick2 = (e)=>{
    const interests = document.querySelectorAll('.user-interest');
     const arr1 = [...interests];
     const arr2 = [];
    for(let i = 0;i < arr1.length;i++)
    {
        const div = arr1[i];
        (div.classList).contains("selected") && arr2.push(div.innerText);
    }
    setInterests(arr2);
   onClick();
  }

  return (
    <div className="interest-info">
      <div className="overlay2 not-show">
        <div className="user-interests">
          <div className="interests-top">
          {
            arr.map((interest)=>
            <div key={`${interest}2`} className="user-interest" onClick={onClick1}>{interest}</div>)
          }
          </div>
          <div className="interests-bottom">
            <button className="update-btn submit" onClick={onClick2} >Save</button>
            <button className="update-btn cancel" name="cancel" onClick={onClick}>Cancel</button>
            </div>
        </div>
       
      </div>
    <div className="interest-top">
        <h3 className="interest-top-heading">Interests</h3>
        <button className="interest-btn" onClick={onClick}>Change</button>
    </div>
    <div className="interest-bottom">

      {
        interests.map((interest)=>
        <div key={`${interest}1`} className="interest">{interest}</div>
        )
      }
    </div>
</div>
  )
}

export default Interest