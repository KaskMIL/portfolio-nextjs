import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className='h-screen relative flex flex-col text-left overflow-hidden items-center md:flex-row max-w-full px-5 justify-center mx-auto'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>Experiences</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 mt-[5rem] snap-x snap-mandatory'>
        {/* experience card */}
        <ExperienceCard />
        {/* experience card */}
        <ExperienceCard />
        {/* experience card */}
        <ExperienceCard />
        {/* experience card */}
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience