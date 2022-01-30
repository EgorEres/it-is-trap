import { useCallback, useState } from 'react'
import Image from '../image/Image'

const Card = ({
  position,
  rotation = [0.2, -0.1, 0],
  onClick = () => {},
  cardData
}) => {
  const [scale, setScale] = useState(1)
  const [currentPosition, setPosition] = useState(position)
  const [currentRotation, setRotation] = useState(rotation)

  // this handlers we can change to ref
  const enterHandler = useCallback(e => {
    e.stopPropagation()
    setPosition([currentPosition[0] + 0.3, currentPosition[1] + 0.7, 1])
    setRotation([0,0,0])
    setScale(1.2)
  }, [setPosition, setRotation, setScale, currentPosition])

  const leaveHandler = useCallback(e => {
    e.stopPropagation()
    setPosition(position)
    setRotation(rotation)
    setScale(1)
  }, [setPosition, setRotation, setScale, position, rotation])

  return <group
    position={currentPosition}
    rotation={currentRotation}
    onClick={onClick}
    onPointerEnter={enterHandler}
    onPointerLeave={leaveHandler}
    scale={scale}
  >
    <Image url={cardData.imgUrl} />
    <mesh>
      <boxGeometry
        args={[1.2, 2, 0.01]}
      />
      <meshStandardMaterial
        color={'yellow'}
        emissive={'black'}
        metalness={0.5}
        lightMapIntensity={3}
      />
    </mesh>
  </group>
}

export default Card
