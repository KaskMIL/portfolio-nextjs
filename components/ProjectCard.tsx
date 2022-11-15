import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

type Props = {
  [key: string]: any,
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  bgcolor: 'black',
  opacity: '90%',
  color: 'white',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
};

const ProjectCard = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          className='rounded-md cursor-pointer hover:scale-[1.05] transition duration-500'
          onClick={handleOpen}
        />
      </motion.div>
      <div className='space-y-5 md:px-10'>
        <h4
        onClick={handleOpen}
          className='text-center text-4xl font-bold tracking-[3px] underline decoration-[#F7AB0A] underline-offset-8 hover:cursor-pointer hover:scale-110 transform duration-300'
        >
            {project.name}</h4>
      </div>
      <div className='flex space-x-5 py-2 px-4 rounded-lg'>
        {project.tech?.map((technology: any) => (
          <Image
            key={`${project.name}-img`}
            src={technology.url}
            alt='tech'
            width='50'
            height='50'
            className='rounded-full h-12 w-12 p-2 hover:scale-125 transition duration-500 ease-in-out object-fill'
          />
        ))}
      </div>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4
            className='font-light md:text-4xl text-purple-600 tracking-[2px] text-center mb-10 text-2xl underline decoration-[#F7AB0A] underline-offset-8'
            >
            {project.name}
          </h4>
          <p
            className='text-md tracking-[1px] md:tracking-[3px] md:text-xl text-gray-300 mb-10'
          >
            {project.description}
          </p>
          <div
            className='flex justify-evenly'
          >
            <a className='projectLink' target='_blank' rel='noreferrer' href={project.source}>Source Code</a>
            <a className='projectLink' target='_blank' rel='noreferrer' href={project.site}>Site</a>
          </div>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default ProjectCard