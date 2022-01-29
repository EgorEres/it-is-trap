import { useCallback, useState } from 'react'
import './Canvas.css';
import { Canvas } from '@react-three/fiber'
import Base from '../base/Base'
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { getMixedPack } from '../../store/main-selector'

const useStore = () => ({
  mixedPack: useSelector(getMixedPack)
})

function MainCanvas() {
  const { mixedPack } = useStore()
  const [hand, updateHand] = useState(mixedPack.slice(0, 4))
  const [damp, updateDamp] = useState([])
  const [pack, updatePack] = useState(mixedPack.slice(4))

  const handleClick = useCallback(e => {
    e.stopPropagation()
    const takenCards = pack.splice(0, 2)
    updateHand([...hand, ...takenCards])
    updatePack(pack)
  }, [pack, hand, updateHand, updatePack])

  const handleDampClick = useCallback(e => {
    e.stopPropagation()
    const dampCard = hand.shift()
    updateHand(hand)
    updateDamp([...damp, dampCard])
  }, [damp, hand, updateHand, updateDamp])

  const handleDumpClick = useCallback(e => {
    e.stopPropagation()
    updatePack([...pack, ...damp])
    updateDamp([])
  }, [pack, damp, updatePack, updateDamp])

  return (
    <Canvas
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Base position={[-2.5, 1, 0]} />
      <Base position={[0, 1, 0]} />
      <Base position={[2.5, 1, 0]} />

      {hand.map((card, index) => <Card position={[-4 + (index + 1)*1.2, -2.5, 0]} onClick={handleDampClick} />)}

      {
        pack.map((card, index) => <Card
          position={[5, -2.5 + (index + 1)*0.05, 0]}
          rotation={[1.5, 0.2, 0.5]}
          onClick={handleClick}
        />)
      }

      {damp.map((card, index) => <Card
        position={[-5, -2.5 + (index + 1)*0.05, 0]}
        rotation={[1.5, -0.2, -0.5]}
        onClick={handleDumpClick}
      />)}

    </Canvas>
  );
}

export default MainCanvas;
