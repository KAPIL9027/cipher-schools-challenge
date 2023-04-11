import React from 'react'
import './Web.css';
import InputOption from './InputOption';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
function Web() {
  return (
    <div className="web-info">
        <div className="web-top">
            <h3 className="web-top-heading">ON THE WEB</h3>
            <button className="web-btn">Edit</button>
        </div>
        <div className="web-bottom">
         <InputOption title="Linkedin" ImageIcon={LinkedInIcon}/>
         <InputOption title="Github" ImageIcon={GitHubIcon}/>
         <InputOption title="Facebook" ImageIcon={FacebookIcon}/>
         <InputOption title="Twitter" ImageIcon={TwitterIcon}/>
         <InputOption title="Instagram" ImageIcon={InstagramIcon}/>
         <InputOption title="Website" ImageIcon={LanguageIcon}/>
        </div>
    </div>
  )
}

export default Web