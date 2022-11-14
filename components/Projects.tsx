import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import react from './assets/icons8-react-native-240.png'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4 ,5];
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
      className='h-screen relative flex flex-col items-center justify-center md:flex-row'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-screen'>
        {projects.map(project => (
          <div
            key={project}
            className='w-screen flex-shrink-0 snap-center space-y-10 flex flex-col items-center justify-center p-10'
          >
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={react}
                alt='react logo'
                height={300}
                width={300}
              />
            </motion.div>
            <div className='space-y-5 md:px-10'>
              <h4 className='text-center text-4xl font-bold tracking-[3px]'>Case study {project}</h4>
              <p className='text-sm text-center md:text-left font-light tracking-[0.7px] md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, placeat nihil! Aperiam deleniti consectetur, omnis voluptatibus nam reiciendis quis voluptates itaque, veritatis eius voluptate nesciunt natus at. Repellendus, minima beatae!</p>
            </div>
            <div className='flex justify-between w-full'>
              <Image
                src={react}
                alt='react logo'
                width={35}
                height={35}
              />
              <Image
                src={react}
                alt='react logo'
                width={35}
                height={35}
              />
              <Image
                src={react}
                alt='react logo'
                width={35}
                height={35}
              />
              <Image
                src={react}
                alt='react logo'
                width={35}
                height={35}
              />
            </div>
          </div>
        ))}
        {/* Project */}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0a]/10 opacity-50 left-0 h-[300px] -skew-y-12'>

      </div>
    </motion.div>
  )
}

export default Projects