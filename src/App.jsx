import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas
        camera={{
          position: [2,0,-8]
        }}
      >
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
