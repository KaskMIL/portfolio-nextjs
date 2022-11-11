import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-3xl mx-auto z-20'>
      <motion.div
        initial= {{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/tomasmilanesi"
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url="https://linkedin.com/in/tom-milanesi/"
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url="https://github.com/kaskMIL"
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url="https://facebook.com/tomasmilanesi"
          fgColor='grey'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>
          get in touch!
        </p>
      </motion.div>
    </header>
  )
}