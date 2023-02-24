import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

const Laptop = () => {
  const ref = React.useRef()
  function Model() {
    const { scene } = useGLTF("laptop.glb")
    return <primitive object={scene} />
  }

  useFrame(() => {
    ref.current.rotation.y += 0.007
  })

  return (
    <mesh ref={ref}>
      <Model />
    </mesh>
  )

}

export default Laptop
