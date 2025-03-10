import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

// Afficher les cartes de service
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.74)}
        className='w-full green-pink-gradient
        p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // Les options de tilt (mouvements) des cartes 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col'
        >
          <img 
            src={icon} 
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 
          className='text-white text-[20px]
          font-bold text-center'
          > 
            {title} 
          </h3>
        </div>
      </motion.div>
    </Tilt>
  ) 
}

const About = () => {
  return (
    <>
      {/* Animer le contenu dans motion.div */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Aperçu
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        Spécialisée dans la création de simulateurs logiciels 
        de formation à la conduite de systèmes complexes,
        FORSIM accompagne également ses clients dans leur
        transformation numérique blablabla... 
      </motion.p>
      
      {/* Création des cartes de présentation */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          // Parcourir les services proposés
          services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              index={index}
              {...service}
            />
          ))
        }
      </div>
    </>
  )
}

// On utilise notre composant haut-niveau
export default SectionWrapper(About, "about")