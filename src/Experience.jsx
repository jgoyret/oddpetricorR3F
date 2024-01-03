
import { 
    OrbitControls,
    Environment,
    Center,
    Sparkles
 } from '@react-three/drei'
 import { PerspectiveCamera } from '@theatre/r3f'



export default function Experience()
{

    return(
        <>
            
            <PerspectiveCamera 
                theatreKey="Camera" 
                makeDefault 
                position={[0, 0, -5]} 
                fov={75} 
            />

            <Environment
                background
                preset='night'
                blur={0.9}
            />

            <Center>
                <Sparkles
                    count = {1000}
                    /** Size of particles (default: randomized between 0 and 1) */
                    size = {15}
                    /** The space the particles occupy (default: 1) */
                    scale = {100}
                    /** Movement factor (default: 1) */
                    noise = {0.5}
                />
            </Center>

        </>
    )
}