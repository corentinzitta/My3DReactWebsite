import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
// useGLTF : Pour importer des modèles 3D
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    // 
    <mesh>
      {/* Créer une lumière pour voir notre canvas, 
      voir doc react-three-fiber */}
      <hemisphereLight intensity={3} 
      groundColor='black'/>
      {/* Créer une lumière qui simule un reflet sur notre objet */}
      <pointLight intensity={1} />
      {/* spotLight : Non fonctionnel */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {
  // Pour adapter au format mobile l'objet 3D
  const [isMobile, setIsMobile] = useState(false)

  // Contrôler si on est bien sur un mobile
  useEffect(() => {
      // Add a listener for changes to the 
      // screen size
      const mediaQuery = window.matchMedia(
        '(max-width: 500px)'
      )
      // Set the initial value of the `isMobile`
      // state variable
      setIsMobile(mediaQuery.matches)

      // Define a callback function to handle
      // changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }

      // Add the callback function as a listener
      // for changes to the media query
      mediaQuery.addEventListener('change',
        handleMediaQueryChange
      )

      return () => {
        mediaQuery.removeEventListener('change',
          handleMediaQueryChange
        )
      }
    })

  return (
    <Canvas
      frameloop='demand'
      shadows
      // Définir d'où est-ce qu'on regarde notre canvas
      camera={{position: [20,3,5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Mettre en place un chargement pendant que notre modèle charge */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // Pas le droit de zoomer 
          enableZoom={false}
          // Uniquement le droit de bouger le canvas horizontalement
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas