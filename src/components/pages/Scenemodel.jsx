import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from 'react';
import Scene from "../../Scene";
const Scenemodel = () => {
  return (
   <>   <div className="h-full flex justify-center items-center page-shadow">
             <div className="h-64 w-64 bg-secondary   " >
                <Canvas  >
                <OrbitControls />
                <ambientLight intensity={1} />
                <directionalLight position={[1, 1, 1]} intensity={1} />
            
                
                <Scene position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
                </Canvas>
            </div>
        </div>
       
   </>
  )
}

export default Scenemodel