import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      // Sort experiences by year in descending order
      const sortedExperiences = data.sort((a, b) => {
        const aStartYear = getStartYear(a.year);
        const bStartYear = getStartYear(b.year);
        return bStartYear - aStartYear;
      });
      console.log("sortedExperience", sortedExperiences);
      setExperiences(sortedExperiences);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  
  const getStartYear = (timeRange) => {
    const [startYear] = timeRange.split(' - ');
    const [, year] = startYear.split(' ');
    return parseInt(year);
  };
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => {
            console.log("experience.year", experience.year); // Logging the value of experience.year
            return(
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => {
                  return(
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name} 
                    >
                      <h2 className="bold-text">{work.name}</h2>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      key={work.name}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </ React.Fragment>
                )})}
              </motion.div>
            </motion.div>
          )})}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
