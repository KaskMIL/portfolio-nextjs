import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'


type Props = {}

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className='h-screen relative flex flex-col items-center justify-center space-y-10'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>Contact</h3>
      <div className='space-y-5'>
        <h4 className='text-4xl font-light text-gray-500 text-center mb-8 underline decoration-[#F7AB0A] underline-offset-8 tracking-[10px]'>Let's chat!</h4>

        <div className='space-y-5'>
          <div className='flex space-x-5 items-center'>
            <div className='border border-[#F7AB0A] animate-pulse rounded-full p-2'>
              <PhoneIcon
                className='w-[15px] h-[15px] animate-pulse text-[#F7AB0A]'
              />
            </div>
            <p className='text-xl font-semibold tracking-[2px]'>+54-911-2403-0900</p>
          </div>
          <div className='flex space-x-5 items-center'>
            <div className='border border-[#F7AB0A] animate-pulse rounded-full p-2'>
              <MapPinIcon
                className='w-[15px] h-[15px] animate-pulse text-[#F7AB0A]'
              />
            </div>
            <p className='text-xl font-semibold tracking-[2px]'>Argentina, Buenos Aires</p>
          </div>
          <div className='flex space-x-5 items-center'>
            <div className='border border-[#F7AB0A] animate-pulse rounded-full p-2'>
              <EnvelopeIcon
                className='w-[15px] h-[15px] animate-pulse text-[#F7AB0A]'
              />
            </div>
            <p className='text-xl font-semibold tracking-[2px]'>tomi.milanesi@gmail.com</p>
          </div>
        </div>
      </div>

      <ContactForm />
    </motion.div>
  )
}

export default Contact