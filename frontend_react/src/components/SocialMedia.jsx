import React from 'react';
// import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href="https://www.linkedin.com/in/maroob-syed/" target="_blank" rel="noopener noreferrer">< BsLinkedin /></a>
    </div>
    <div>
     <a href="https://github.com/Maroob123/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
    <div>
      {/* <FaFacebookF /> */}
     <a href="mailto:syedmuhammadmaroob123@gmail.com"><CgMail /></a>
    </div>
  </div>
);

export default SocialMedia;
