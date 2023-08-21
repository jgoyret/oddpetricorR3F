
import { 
    OrbitControls,
    ContactShadows,
    Environment,
    Center,
    Text3D,
    Float,
 } from '@react-three/drei'
import Bicho from './models/Bicho'
import fontwip from './facetype/Metal Demo_Regular.json'


export default function Experience()
{

    return(
        <>
            {/* CONFIG */}

            <OrbitControls makeDefault/>
            
            <Center>
            {/* ENVIROMENT */}

            <Environment
                background
                preset='dawn'
                blur={0.5}

            />

            <ContactShadows
                position={[0,-1,0]}
                opacity={0.3}
            />

            {/* MODELS */}

            <Bicho position={[0,1,0]}/>

            <Float>
                <Text3D 
                    font={fontwip}
                    position={[2.,5,0]}
                    rotation={[0,Math.PI,0]}
                    scale={0.5}
                > 
                    Coming Soon
                    <meshStandardMaterial color={'white'} metalness={1} roughness={0.1}/> 
                </Text3D>
            </Float>

            </Center>


        </>
    )
}