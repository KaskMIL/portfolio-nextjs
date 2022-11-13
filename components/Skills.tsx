import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 5 }}
      className='h-screen relative flex flex-col items-center text-center md:text-left xl:flex-row justify-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] font-semibold text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-[134px] uppercase tracking-[3px] font-light text-gray-500 text-lg'>Hover over a skill</h3>

      <div className='grid grid-cols-4 space-x-5 justify-center'>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>

      </div>
    </motion.div>
  )
}

export default Skills