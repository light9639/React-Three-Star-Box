import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Stars } from '@react-three/drei'

function Box(props: any) {
  const mesh: any = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.025;
    mesh.current.rotation.y += 0.025;
    mesh.current.rotation.z += 0.025;
  });
  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default function App() {

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
        <Stars
          radius={300}
          depth={60}
          count={20000}
          factor={7}
          saturation={0}
          fade={true}
        />
      </Canvas>
    </div>
  )
}