import { useCallback, useState } from 'react'
import './Canvas.css';
import { Canvas } from '@react-three/fiber'
import Base from '../base/Base'
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { getMixedPack } from '../../store/main-selector'
import PackBlock from '../packBlock/PackBlock';
import CenterCard from '../card/CenterCard';

const useStore = () => ({
  mixedPack: useSelector(getMixedPack)
})

function MainCanvas() {
  const { mixedPack } = useStore()

  const [hand, updateHand] = useState(mixedPack.slice(0, 4))
  const [damp, updateDamp] = useState([])
  const [pack, updatePack] = useState(mixedPack.slice(4))
  const [chosenCards, setChosenCards] = useState([])

  const handlePackClick = useCallback((e: any) => {
    e.stopPropagation()
    const takenCards = pack.splice(0, 3)
    // @ts-ignore
    setChosenCards(takenCards)
    updatePack(pack)
  }, [pack, updatePack, setChosenCards])

  const handleDampClick = useCallback((e: any) => {
    e.stopPropagation()
    const dampCard = hand.shift()
    updateHand(hand)
    // @ts-ignore
    updateDamp([ ...damp, dampCard ])
  }, [damp, hand, updateHand, updateDamp])

  const handleDumpClick = useCallback((e: any) => {
    e.stopPropagation()
    updatePack([...pack, ...damp])
    updateDamp([])
  }, [pack, damp, updatePack, updateDamp])

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Base position={[-2.5, 1, 0]} />
      <Base position={[0, 1, 0]} />
      <Base position={[2.5, 1, 0]} />

      {/* сброс */}
      {damp.length && <PackBlock
        position={[-5, -2.5, 0]}
        rotation={[0.1, 0, -0.1]}
        bold={damp.length / 10}
    // @ts-ignore
        onClick={handleDumpClick}
      />}

      {/* рука */}
    {/* @ts-ignore */}
      {hand.map((card, index) => <Card
        position={[-3 + (index + 1)*0.5, -2.5, 0]}
    // @ts-ignore
    onClick={handleDampClick}
        cardData={card}
      />)}

      {/* колода */}
      {pack.length && <PackBlock
        position={[5, -2.5, 0]}
        rotation={[0.1, 0, 0.1]}
    // @ts-ignore
    onClick={handlePackClick}
        bold={pack.length / 10}
      />}

      {/* animate block with chosen cards */}
      {!!chosenCards.length && <CenterCard
        chosenCards={chosenCards}
        setChosenCards={setChosenCards}
        clickByCard={() => console.log('card is chosen')}
      />}


    </Canvas>
  );
}

export default MainCanvas;
