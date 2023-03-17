import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../style.js';
import {experiences} from '../constants/index.js';
import {SectionWrapper} from '../hoc/index.js';
import {textVariant} from '../utils/motion.js';

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631'
      }}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-bold" style={{margin: 0}}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`experience-point-${idx}`}
            className="pl-1 text-white-100 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')