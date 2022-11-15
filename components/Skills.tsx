import React from 'react';
import { motion } from 'framer-motion';
import { languagesSkills, frameworksSkills, toolsSkills} from './DataSkills';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col items-center text-center md:text-left xl:flex-row justify-center p-5'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] font-semibold text-gray-500 text-2xl'>Skills</h3>

      <div className='space-y-10 text-center md:mt-[100px]'>
        <div>
          <h4 className='skillsTitle'>Languages</h4>
          <div className='flex gap-5 items-center justify-center bg-[#292929] p-10 rounded-lg shadow-sm shadow-stone-900'>
          {languagesSkills.map((skill) => (
              <Skill
                key={`${skill.name}-skill`}
                image={skill.url}
                name={skill.name}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className='skillsTitle'>Frameworks</h4>
          <div className='flex gap-5 items-center justify-center bg-[#292929] p-5 rounded-lg shadow-sm shadow-stone-900'>
          {frameworksSkills.map((skill) => (
              <Skill
                key={`${skill.name}-skill`}
                image={skill.url}
                directionLeft={true}
                name={skill.name}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className='skillsTitle'>Tools</h4>
          <div className='flex gap-5 items-center justify-center bg-[#292929] p-5 rounded-lg shadow-sm shadow-stone-900'>
          {toolsSkills.map((skill) => (
              <Skill
                key={`${skill.name}-skill`}
                image={skill.url}
                name={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills