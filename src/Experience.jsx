
import { 
    OrbitControls,
    Environment,
    Center,
    Sparkles,
    useGLTF
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
                // lookAt={[0,0,0]}
            />

            <Environment
                background
                preset='city'
                blur={0.9}
            />

            <Sparkles
                count = {1000}
                /** Size of particles (default: randomized between 0 and 1) */
                size = {15}
                /** The space the particles occupy (default: 1) */
                scale = {100}
                /** Movement factor (default: 1) */
                noise = {0.5}
            />
            <CriaturasPeleando url={'peleaDeCriaturas.glb'}/>


        </>
    )
}

function CriaturasPeleando({ url }) 
{
    const { scene } = useGLTF(url)
    console.log(scene.scale)
    return <primitive object={scene} scale={5}/>
}