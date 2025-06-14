import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full'
      >
        {/* Cases présentant les images d'une réalisation */}
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover
            rounded-2xl"
          />
          {/* Afficher un lien GitHub en haut de case */}
          <div className="absolute inset-0 flex
          justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github link"
                className="w-1/2 h-1/2
                object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5" >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Afficher des tags pour les technologies utilisées */}
        <div className="mt-4 flex flex-wrap gap-2">
          { 
            tags.map((tag) => (
              <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      {/* Animer le contenu dans motion.div */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Mon savoir-faire
        </p>
        <h2 className={styles.sectionHeadText}>
          Découvrez mes différents projets
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('','',0.1,1)}
          className="mt-3 text-secondary
          text-[17px] max-w-3xl leading-[30px]"
        >
          Au cours de mon parcours, que ce soit académique
          ou professionnel, j&apos;ai énormément appris grace à la pratique.
          C&apos;est pour cela que j&apos;accorde une grande importance aux projets
          auxquels je prend part. Que ce soit pour répondre à un besoin métier 
          ou simplement m&apos;éxercer à différentes technologies, j&apos;aime pratiquer.
          Découvrez quelques uns de mes projets : 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works,'work')