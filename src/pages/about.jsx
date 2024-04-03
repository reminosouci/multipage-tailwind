import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { OrbitControls, Loader } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



function Model() {
  const gltf = useLoader(GLTFLoader, '../../public/untitled.glb');

  return <primitive object={gltf.scene} />;
}

function AboutPage() {
  return (
    <div style={{ height: '100vh' }}> 
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default AboutPage;