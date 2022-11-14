import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  const directionLeft = true;
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 3 }}
      className='h-screen relative flex flex-col items-center text-center md:text-left xl:flex-row justify-center p-5'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] font-semibold text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-[134px] uppercase tracking-[3px] font-light text-gray-500 text-sm'>Hover over a skill</h3>

      <div className='grid grid-cols-4 gap-5 bg-[#292929] p-5 rounded-lg shadow-sm shadow-stone-900'>
        <Skill />
        <Skill directionLeft={true} />
        <Skill />
        <Skill directionLeft={true} />
        <Skill />
        <Skill directionLeft={true} />
        <Skill />
        <Skill directionLeft={true} />
      </div>
    </motion.div>
  )
}

export default Skills