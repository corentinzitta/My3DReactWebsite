import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
// Reste à configurer : sur le site emailjs.com
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div
      className='xl:mt-12 xl:flex-row
      flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn('left', 'tween, 0.2, 1')}
        className='flex-[0.75] bg-black-100 p-8
        rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Contacts
        </p>
        <h3 className={styles.sectionHeadText}>
          Nous contacter
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Votre nom & prénom
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Entrez votre nom et prénom'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Votre email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Entrez votre email'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Votre message
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Que voulez-vous nous dire?'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-medium'
            />
          </label>
          {/* Pour centrer le bouton 'Envoyer' */}
          <div className='flex flex-col items-center'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8
              outline-none w-fit text-white
              font-bold shadow-md shadow-primary
              rounded-xl'
            >
              {loading ? "En cours d'envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Afficher la planète qui bouge */}
      <motion.div
        variants={slideIn('right', 'tween, 0.2, 1')}
        className='xl:flex-1 xl:h-auto md:h-[550px]
        h)-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')