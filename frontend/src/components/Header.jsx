import React from 'react'
import './header.css';
import logo from './asset0.png';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Icon from './Icon.jsx';
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import cipher from './asset1.svg';
import change from './changeTheme.png';

function Header() {
  return (
    <div className="header">
        <div className="header-left">
        <svg width="21" height="15" viewBox="0 0 28 20" fill="none" class="hamburgur" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18.3333C0 19.2538 0.746191 20 1.66667 20H12.3333C13.2538 20 14 19.2538 14 18.3333C14 17.4129 13.2538 16.6667 12.3333 16.6667H1.66667C0.746191 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746191 11.6667 1.66667 11.6667H26.3333C27.2538 11.6667 28 10.9205 28 10C28 9.07952 27.2538 8.33333 26.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM0 1.66667C0 2.58714 0.746191 3.33333 1.66667 3.33333H26.3333C27.2538 3.33333 28 2.58714 28 1.66667C28 0.746192 27.2538 0 26.3333 0L1.66667 0C0.746193 0 0 0.746192 0 1.66667Z" fill="currentColor"/>
        </svg>
        <div className="header-brand">
        <img className="header-logo" alt="cipher" src={logo}/>
        <h3 className="header-heading">CipherSchools</h3>
        </div>
        <div className="header-left-browse">
        <Icon ImageIcon={ExploreOutlinedIcon} title="Browse"/>
        <svg className="down-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.08847 6.59357C5.86888 7.37116 7.13117 7.37121 7.91165 6.59369L12.2331 2.28855C12.6563 1.867 12.6565 1.18191 12.2337 0.760065C11.8126 0.339954 11.1309 0.339825 10.7096 0.759775L7.91215 3.5485C7.13155 4.32666 5.86852 4.32659 5.08801 3.54835L2.2909 0.759393C1.86986 0.33958 1.18856 0.339433 0.767341 0.759062C0.344011 1.18079 0.343982 1.86624 0.767277 2.288L5.08847 6.59357Z" fill="#808191"/>
</svg>
        </div>
        
        </div>
        <div className="header-right">
         <div className="search__input__container">
          <div className="search__input">
          <SearchIcon className="search-icon"/>
         <input placeholder="Search and Learn" className="header-right-input" type="text"/>
          </div>
         <TuneOutlinedIcon/>
         </div>
         <div className="header__right__icons">
           <NotificationsNoneOutlinedIcon className="notification" />
           <Avatar className="avatar"/>
           <img src={cipher} alt="cipher-points" className="right-icons" />
         </div>
        </div>
    </div>
  )
}

export default Header