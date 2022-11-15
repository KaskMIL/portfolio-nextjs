import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  [key: string]: any,
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      key={project.name}
      className='w-screen flex-shrink-0 snap-center space-y-10 flex flex-col items-center justify-center p-10'
    >
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={project.url}
          alt='react logo'
          height={500}
          width={500}
          className='rounded-md'
        />
      </motion.div>
      <div className='space-y-5 md:px-10'>
        <h4 className='text-center text-4xl font-bold tracking-[3px] underline decoration-[#F7AB0A] underline-offset-8 hover:cursor-pointer hover:scale-110 transform duration-300'>{project.name}</h4>
      </div>
      <div className='flex space-x-5 py-2 px-4 rounded-lg'>
        {project.tech?.map((technology: any) => (
          <Image
            src={technology.url}
            alt='tech'
            width='50'
            height='50'
            className='rounded-full h-12 w-12 p-2 hover:scale-110 transition duration-500 ease-in-out object-fill'
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard