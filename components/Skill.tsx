import React from 'react'
import react from './assets/icons8-react-native-240.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
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
      <Image
        src={react}
        alt='react logo'
        className='border border-gray-500 rounded-full h-12 w-12 md:h-24 md:w-24 p-2 hover:scale-110 transition duration-500 ease-in-out'
      />
      <div className='absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-white w-12 h-12 md:h-24 md:w-24 rounded-full'>
        <div className='flex justify-center items-center h-full'>
          <p className='md:text-2xl text-gray-500'>100%</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill