import { useCallback, useState } from 'react'
import Image from '../image/Image'
import { useSpring, animated } from '@react-spring/three'

const Card = ({
  position,
  rotation = [0.2, -0.1, 0],
  onClick = () => {},
  cardData
}) => {
  const [active, setActive] = useState(false)
  const springs = useSpring({
    config: { duration: 300 },
    scale: active ? 1.2 : 1,
    position: active ? [position[0] + 0.3, position[1] + 0.7, 1] : position,
    rotation: active ? [0,0,0] : rotation,
  })

  const enterHandler = useCallback(e => {
    e.stopPropagation()
    setActive(true)
  }, [setActive])

  const leaveHandler = useCallback(e => {
    e.stopPropagation()
    setActive(false)
  }, [setActive])

  return <animated.group
    position={springs.position}
    rotation={springs.rotation}
    onClick={onClick}
    onPointerEnter={enterHandler}
    onPointerLeave={leaveHandler}
    scale={springs.scale}
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
  </animated.group>
}

export default Card
