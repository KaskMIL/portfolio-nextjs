import React from 'react';
import { motion } from 'framer-motion';
import projects from './ProjectsData'
import ProjectCard from './ProjectCard';

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
      className='h-screen relative flex flex-col items-center justify-center md:flex-row'
    >
      <h3 className='absolute top-28 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-screen md:h-[80%] mt-[100px]'>
        {projects.map(project => (
          <ProjectCard
          key={`${project.name}-card`}
          project={project}
        />
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0a]/10 opacity-50 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects