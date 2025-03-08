import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas' 

const Hero = () => {
  return (
    // Genérer le fond du site
    <section className='relative w-full h-screen
    mx-auto'>
      {/* Texte de présentation en début de site */}
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}
      >
        {/* Générer le trait & point mauve à côté du texte */}
        <div className='flex flex-col
          justify-center items-center mt-5'
        >
          {/* Générer le point mauve */}
          <div className='w-5 h-5 rounded-full 
            bg-[#915eff]'
          />
          {/* Générer le trait mauve */}
          <div className='w-1 sm:h-80 h-40 
            violet-gradient'
          />
        </div>

        <div>
          {/* Titre principal */}
          <h1 className={`${styles.heroHeadText} 
            text-white`}
          >
            Bienvenue chez
            <span className='text-[#915eff]'>
              &nbsp;FORSIM
            </span>
          </h1>
          {/* Description */}
          <p className={`${styles.heroSubText}
            mt-2 text-white-100`}
          >
            Spécialisé depuis plus de 10 ans dans 
            <br className='sm:block hidden'/> 
            le développement de simulateurs.
          </p>
        </div>
      </div>
      {/* Générer l'ordinateur 3D  */}
      <ComputersCanvas />

      {/* Générer un objet animé pour aller à 
      la section suivante */}
      <div className='absolute xs:bottom-10 
      bottom-32 w-full flex justify-center
      items-center'
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full
              bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero