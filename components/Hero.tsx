import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import frente from './assets/frente.jpg'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [words, count] = useTypewriter({
    words: [
      'Hi, Im Tom',
      'Coffee drinker and pizza eater',
      'Coding nice things'
    ],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 75,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
          src={frente}
          alt='me'
          width={150}
          height={150}
          className='relative rounded-full mx-auto object-cover'
        />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[10px] pb-2'>Full-Stack developer</h2>
        <h1 className='text-5xl font-semibold px-10'>
          <span>{words}</span>
          <Cursor />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
          <button className="buttonHero">About</button>
          </Link>
          <Link href='#projects'>
          <button className="buttonHero">Projects</button>
          </Link>
          <Link href='#skills'>
          <button className="buttonHero">Skills</button>
          </Link>
          <Link href='#contact'>
          <button className="buttonHero">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero