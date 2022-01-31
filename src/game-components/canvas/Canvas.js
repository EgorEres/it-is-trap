import { useCallback, useState } from 'react'
import './Canvas.css';
import { Canvas } from '@react-three/fiber'
import Base from '../base/Base'
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { getMixedPack } from '../../store/main-selector'
import PackBlock from '../packBlock/pack-block';
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

  const handlePackClick = useCallback(e => {
    e.stopPropagation()
    const takenCards = pack.splice(0, 3)
    setChosenCards(takenCards)
    updatePack(pack)
  }, [pack, updatePack, setChosenCards])

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
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Base position={[-2.5, 1, 0]} />
      <Base position={[0, 1, 0]} />
      <Base position={[2.5, 1, 0]} /> */}

      {/* сброс */}
      {damp.length && <PackBlock
        position={[-5, -2.5, 0]}
        rotation={[0.1, 0, -0.1]}
        bold={damp.length / 10}
        onClick={handleDumpClick}
      />}

      {/* рука */}
      {hand.map((card, index) => <Card
        position={[-3 + (index + 1)*0.5, -2.5, 0]}
        onClick={handleDampClick}
        cardData={card}
      />)}

      {/* колода */}
      {pack.length && <PackBlock
        position={[5, -2.5, 0]}
        rotation={[0.1, 0, 0.1]}
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
