import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Loading from "./Loading";
import ComingSoon from "./ComingSoon";
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'




const oddSheet = getProject('Odd Project').sheet('Odd Sheet')

studio.initialize()
studio.ui.restore()
studio.extend(extension)


function App() {

  return (
    <>
        <Suspense fallback={<Loading />}>
          <Canvas
            camera={{
              position: [2, 0, -8],
            }}
          >
            <SheetProvider sheet={oddSheet}>
              <Experience />
              {/* <ComingSoon/> */}
            </SheetProvider>
          </Canvas>
        </Suspense>
    </>
  );
}

export default App;
