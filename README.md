# :zap: React-three-fiber와 drei로 만든 밤하늘에서 돌아가는 정육면체입니다.
:octocat: https://light9639.github.io/React-Three-Star-Box/

![light9639 github io_React-Three-Star-Box_](https://user-images.githubusercontent.com/95972251/212916680-b9529ac2-83e6-419f-bb17-3be15955c65b.png)

:sparkles: React-three-fiber와 drei로 만든 밤하늘에서 돌아가는 정육면체입니다. :sparkles:
## :tada: React 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt 선택하면 생성 완료.
## 🛸 React three.js 프로그램 설치
- React three.js 프로그램 설치 명령어
```bash
npm install @react-three/drei @react-three/fiber three
# or
yarn add @react-three/drei @react-three/fiber three
```

## ✒️ App.tsx, index.css 수정 및 작성
### :zap: App.tsx
- `useFrame`을 사용하여 정육면체가 돌아가도록 만들었습니다.
- `Canvas` 태그 안에 `OrbitControls`, `ambientLight`, `spotLight`, `pointLight`를 사용하여 밝기 및 공간감을 주었습니다.
- `Stars` 태그를 사용하여 밤하늘의 별을 만들었습니다.
```bash
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
```
### :zap: index.css
- `Canvas` 태그 안에 css 부분을 작성함.
```bash
body,
html,
#root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.App {
    width: 100vw;
    height: 100vh;
    background-color: #000;
}
#root {
    filter: saturate(1.15) hue-rotate(345deg);
}

#root * {
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 1s ease 0.3s forwards;
}

canvas:active {
    cursor: grabbing;
}
```
