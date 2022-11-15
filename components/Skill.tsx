import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  image: string;
  name: string
}

const Skill = ({ directionLeft, image, name }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className='relative cursor-pointer flex'
    >
      <img
        src={image} alt="react logo"
        className='border border-gray-500 rounded-full h-12 w-12 md:h-24 md:w-24 p-2 hover:scale-110 transition duration-500 ease-in-out object-fill'
      />
      <div className='absolute opacity-0 transition duration-500 ease-in-out bg-[#F7AB0A] hover:opacity-90 w-12 h-12 md:h-24 md:w-24 rounded-full'>
        <div className='flex justify-center items-center h-full'>
          <p className='md:text-xl text-[9px] text-gray-500'>{name}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill