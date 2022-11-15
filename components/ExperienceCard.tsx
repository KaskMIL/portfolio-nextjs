import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import frente from './assets/frente.jpg';
import html from './assets/icons8-html-5-240.png';
import js from './assets/icons8-javascript-240.png';
import react from './assets/icons8-react-native-240.png'
import css from './assets/icons8-css3-240.png'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[390px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 text-center md:opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Image
          src={frente}
          width={200}
          height={200}
          alt='frente'
          className='rounded-full h-32 w-32 xl:h-[200px] xl:w-[200px] object-cover object-center'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h3 className='text-5xl font-light'>Job title</h3>
        <p className='text-2xl font-bold mt-1'>Enterprice title</p>
        <div className='flex justify-evenly my-3'>
          {/* Tech used */}
          <Image
          src={html}
          width={20}
          height={20}
          alt='frente'
          className='rounded-full object-cover object-center'
        />
          {/* Tech used */}
          <Image
          src={js}
          width={20}
          height={20}
          alt='frente'
          className='rounded-full object-cover object-center'
        />
          {/* Tech used */}
          <Image
          src={react}
          width={20}
          height={20}
          alt='frente'
          className='rounded-full object-cover object-center'
        />
          {/* Tech used */}
          <Image
          src={css}
          width={20}
          height={20}
          alt='frente'
          className='rounded-full object-cover object-center'
        />
        </div>
        <p className='uppercase mb-2'>Dates...</p>
        <ul className='space-y-5 ml-5 text-lg'>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard