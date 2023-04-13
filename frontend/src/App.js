import {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import axios from 'axios';
function App() {
  // const login = ()=>{
  //   axios({
  //     method: "post",
  //     url: "http://localhost:8080/api/login",
  //     headers:{
  //       headers: { "Content-Type": 'application/x-www-form-urlencoded' }
  //     },
  //     data: new URLSearchParams({
  //       'email':'rohit01@gmail.com',
  //        'password':'979797'
  //     })
  //   }).then((res)=> {
  //     console.log(res);
  //     localStorage.setItem('user',JSON.stringify(res.data));
  //   }).catch((e)=>{console.log(e)});
  // };
 
  // useEffect(()=>{
  //   login();
  // },[]);
  return (
    <div className="App">
     <Header/>
     <Profile/>
     <Dashboard/>
    </div>
  );
}

export default App;
