import './Canvas.css';
import { Canvas } from '@react-three/fiber'
import Base from '../base/Base'
import Card from '../card/Card';
import { useSelector } from 'react-redux';

const useStore = () => ({
  pack: useSelector((state) => state.main.pack)
})

function App() {
  const {pack} = useStore()
  return (
    <Canvas
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Base position={[-2.5, 1, 0]} />
      <Base position={[0, 1, 0]} />
      <Base position={[2.5, 1, 0]} />

      <Card position={[-1, -2.5, 0]} />
      <Card position={[0, -2.5, 0]} />
      <Card position={[1, -2.5, 0]} />
      <Card position={[2, -2.5, 0]} />

      {
        pack.map((card, index) => <Card position={[5, -2.5 + (index + 1)*0.05, 0]} rotation={[1.5, 0.2, 0.5]} />)
      }
    </Canvas>
  );
}

export default App;
