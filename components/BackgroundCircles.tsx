import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52' />
      <div className='absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52' />
      <div className='absolute border border-[#F7AB0A] rounded-full opacity-20 h-[550px] w-[550px] mt-52 animate-pulse' />
    </motion.div>
  )
}

export default BackgroundCircles