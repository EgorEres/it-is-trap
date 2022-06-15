import { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import * as THREE from 'three'

const Image = ({ url, size=[1.1, 1.9] }: any) => {
  const [texture] = useLoader(THREE.TextureLoader, [url])
  return <mesh position={[0,0,0.009]}>
    <planeBufferGeometry attach="geometry" args={size} />
    <meshBasicMaterial attach="material" map={texture} />
  </mesh>
}

const SuspenseImage = ({url}: any) => {
  return <Suspense fallback={null}>
  <Image url={url} />
</Suspense>
}

export default SuspenseImage
