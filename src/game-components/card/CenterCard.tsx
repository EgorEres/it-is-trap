import { useCallback, useEffect, useState } from 'react'
import Image from '../image/Image'
import { useSpring, animated, useSpringRef, useChain } from '@react-spring/three'


const NewCard = ({ cardData }: any) => {
  const [active, setActive] = useState(false)
  return <group onClick={() => setActive(true)}>
    <Image url={cardData.imgUrl} />
    <mesh>
      <boxGeometry args={[1.2, 2, 0.01]} />
      <meshStandardMaterial
        color={active ? 'green' : 'yellow'}
        // @ts-ignore
        emissive={'black'}
        lightMapIntensity={3}
      />
    </mesh>
  </group>
}


const CenterCard = ({
  chosenCards,
  setChosenCards,
  position = [5, -2.5, -0.5],
  rotation = [-1.5, 3, 0],
  clickByCard = () => console.log('card is chosen')
}: any) => {
  console.log('chosen cards:', chosenCards)

  const firstCardRef = useSpringRef()
  const firstProps = useSpring({
    from: {
      position,
      rotation,
      scale: 1,
    },
    to: {
      position: [-2, 0, 0.7],
      rotation: [0,0,0],
      scale: 1.3,
    },
    ref: firstCardRef
  })

  const secondCardRef = useSpringRef()
  const secondProps = useSpring({
    from: {
      position,
      rotation,
      scale: 1,
    },
    to: {
      position: [0, 0, 0.7],
      rotation: [0,0,0],
      scale: 1.3,
    },
    ref: secondCardRef
  })

  const thirdCardRef = useSpringRef()
  const thirdProps = useSpring({
    from: {
      position,
      rotation,
      scale: 1,
    },
    to: {
      position: [2, 0, 0.7],
      rotation: [0,0,0],
      scale: 1.3,
    },
    ref: thirdCardRef
  })

  useChain([firstCardRef, secondCardRef, thirdCardRef], [0, 0.25, 0.5])

  return <group>
    {/* @ts-ignore */}
    <animated.group
      {...firstProps}
      onClick={clickByCard}
    >
      <NewCard cardData={chosenCards[0]} />
    </animated.group>

    <animated.group
      {...secondProps}
      onClick={clickByCard}
    >
      <NewCard cardData={chosenCards[1]} />
    </animated.group>

    <animated.group
      {...thirdProps}
      onClick={clickByCard}
    >
      <NewCard cardData={chosenCards[2]} />
    </animated.group>
  </group>
}

export default CenterCard
