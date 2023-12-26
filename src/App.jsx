import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Loading from "./Loading";
import ComingSoon from "./ComingSoon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Suspense fallback={<Loading />}>
          <Canvas
            camera={{
              position: [2, 0, -8],
            }}
          >
            {/* <Experience /> */}
            <ComingSoon/>
          </Canvas>
        </Suspense>
    </>
  );
}

export default App;
