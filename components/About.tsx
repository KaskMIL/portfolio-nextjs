import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import frente from './assets/frente.jpg';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>About</h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5
        }}
        className='flex-shrink-0 mt-[100px]'
      >
        <Image
          src={frente}
          alt='Me'
          width={0}
          height={0}
          className='rounded-full object-cover w-56 h-56 -mb-20 md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:h-[300px] xl:w-[300px]'
          />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold underline decoration-[#F7AB0A] underline-offset-8'>Who am I</h4>
        <p className='font-sm'>Hey there, I&apos;m <span className='font-bold text-[#F6AB0A] text-xl tracking-[2px]'>Tom</span>!<br/> Hard worker and passionate, self-learner and curious, I&apos;m always looking for new opportunities to improve my skills and career. Spanish native and English fluent, Frameworks, and Technologies, fast learner, and adaptative.
</p>
      </div>
    </div>
  )
}

export default About