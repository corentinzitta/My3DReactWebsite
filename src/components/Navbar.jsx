import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants/index.js'
import ForsimLogo from '../assets/logo2.png'
import { menu, close } from '../assets'

// voir la documentation de TailwindCSS pour plus de détails sur les éléments CSS dans les propriétés className

const Navbar = () => {
  // valeurs par défauts au démarrage
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    // nav : Edition de la section de navigation, avec des 
    // éléments ayant des liens vers d'autres sections de la page
    <nav
    // w-full = full width / items center = make items appear 
    // in the center / py = padding y of 5 / top-0 = 
    // make it stay on the top / z-20 = to make it appear 
    // on the top of other elements
    className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20
    bg-primary`}>
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>
        {/* Icone FORSIM cliquable */}
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={ () => {
            setActive("")
            // défiler jusqu'en haut de la page
            window.scrollTo(0,0)
          }}                                                                                                                                                                                                                                                                                                    
        >
          <img src={ForsimLogo} alt='logo' className='w-9
          h-9 object-contain'/>
          <p className='text-white text-[18px] 
          font-bold cursor-pointer flex'>FORSIM &nbsp;
          <span className='sm:block hidden'> &nbsp; | Experts en logiciels de simulation</span></p>
        </Link>
        {/* Liste des éléments de section de navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              // Chaque élément de la liste...
              <li 
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                  } 
                  hover:text-white text-[18px]
                  font-medium cursor-pointer
                `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        {/* Responsive design pour la barre de navigation */}
        <div className='sm:hidden flex flex-1
        justify-end items-center'>
          {/* icone de navbar cliquable : icone navbar ou icone fermer navbar */}
          <img
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px]
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/* Afficher ou cacher les éléments */}
          <div 
          className={`${!toggle ? 'hidden' : 'flex'}
          p-6 black-gradient absolute top-20
          right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}>
            {/* Afficher les éléments de navigation */}
            <ul 
            className='list-none flex justify-end items-start
            flex-col gap-4'>
            {
              navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } 
                    font-poppins font-medium cursor-pointer
                    text-[16px]
                  `}
                  onClick={() => { 
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
            

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar