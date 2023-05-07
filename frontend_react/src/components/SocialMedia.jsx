import React from 'react';
// import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
// import {CgMail} from 'react-icons/cg';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href="https://www.linkedin.com/in/maroob-syed/" target="_blank" rel="noopener noreferrer">Follow me on linkdin< BsLinkedin /></a>
    </div>
    <div>
     <a href="https://github.com/Maroob123/" target="_blank" rel="noopener noreferrer">Check my work on github<BsGithub /></a>
    </div>
    <div>
      {/* <FaFacebookF /> */}
     {/* <a href="mailto:syedmuhammadmaroob123@gmail.com">E-Mail Me<CgMail /></a> */}
     <a href="https://www.instagram.com/maroobsyed/" target="_blank" rel="noopener noreferrer">Follow me on Instagram<BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
