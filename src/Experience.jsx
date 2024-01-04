
import { 
    OrbitControls,
    Environment,
    Center,
    Sparkles,
    useGLTF,
    ScrollControls
 } from '@react-three/drei'
 import { PerspectiveCamera } from '@theatre/r3f'
 import CameraControl from './CameraControl'



export default function Experience()
{

    return(
        <>
            <ScrollControls pages={3}  damping={0.1} maxSpeed={0.1}>

                <CameraControl/>
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

            </ScrollControls>
        </>
    )
}

function CriaturasPeleando({ url }) 
{
    const { scene } = useGLTF(url)
    console.log(scene.scale)
    return <primitive object={scene} scale={5}/>
}