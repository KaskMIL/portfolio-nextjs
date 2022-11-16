import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  image: string;
  name: string
}

const Skill = ({ image, name }: Props) => {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className='relative cursor-pointer flex'
    >
      <Image
        src={image}
        alt='tech'
        width='50'
        height='50'
        className='border border-gray-500 rounded-full h-10 w-10 md:h-20 md:w-20 p-2 hover:scale-110 transition duration-500 ease-in-out object-fill'
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