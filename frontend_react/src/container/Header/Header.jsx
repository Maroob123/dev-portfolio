import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import Typewriter from 'typewriter-effect';
import './Header.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

const Header = () => (
  <div className="app__header app__flex">
    {/* <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Maroob</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div> */}

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.9 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <h1 className="head-text">Hi, I am <span>Syed Maroob</span> <span className='wave-emoji' role="img" aria-label="waving hand">👋</span></h1>
      {/* <h2 className="head-text">I love learning new tech.</h2> */}
      <h2 className="head-text"><Typewriter
      options={{
        strings: ['I love learning new tech', 'I love meeting new people', 'I create unique digital experiences','I like to design things',],
        autoStart: true,
        loop: true,
        cursor: ".<",
      }}
    />
    </h2>
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView} 
      className="app__header-circles"
    >
      {[images.redux, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
  </div>
);

export default AppWrap(Header, 'home');
