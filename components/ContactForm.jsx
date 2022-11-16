import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkngqpl");
  const [submitted, setSubmitted] = useState(false);

  const submitForm = () => {
    if (state.succeeded) {
      setSubmitted(!submitted);
      const form = document.getElementById('contact-form');
      form.reset();
    }
  };

  if (state.submitting) {
    return (
      <div>
        <span className='loader' />
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
      >
        <CheckCircleIcon
          className='text-green-500 w-[250px] h-[250px]'
        />
      </motion.div>
    );
  }
  return (
    <motion.form
      initial={{
        x: -200,
        opacity:0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit}
      className='flex flex-col space-y-3 w-[325px] md:w-fit'
      id='contact-form'
    >
        <div className='flex md:space-x-2 flex-col md:flex-row md:space-y-0 space-y-2'>
          <input className='contactInput' name='name' type="text" placeholder='Name' required />
          <ValidationError
            prefix='Name'
            field='name'
            errors={state.errors}
          />
          <input className='contactInput' name='subject' type="text" placeholder='Subject' required />
          <ValidationError
            prefix='subject'
            field='subject'
            errors={state.errors}
          />
        </div>

        <input className='contactInput' name='email' type="email" placeholder='Email' required />
        <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
          />

        <textarea className='contactInput' name='message' placeholder='Leave a comment!' required />
        <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        <button
        onClick={() => submitForm()}
          type='submit'
          className='border py-2'
          disabled={state.submitting}
        >
          Submit
        </button>
      </motion.form>
  )
}

export default ContactForm