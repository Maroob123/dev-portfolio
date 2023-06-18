import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {client, fileFor} from '../../client';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [resume, setResume] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "resume"]';

      client.fetch(query)
      .then((data) => {
      setResume(fileFor(data[0]?.resumeUrl?.asset?._ref));})
      .catch(console.error);
  },[]);

  console.log("resumeUrl",resume);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home"><img src={images.maroob} alt="logo" /></a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-resume">
          <button onClick={()=> window.open(resume, '_blank', 'noopener,noreferrer')} type="button"> My Resume</button>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 20] }}
            transition={{ duration: 0.5, ease: 'backOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <button onClick={()=> window.open(resume, '_blank', 'noopener,noreferrer')}> My Resume</button>

            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
