import './Canvas.css';
import { Canvas } from '@react-three/fiber'
import Base from '../base/Base'
import Card from '../card/Card';

function App() {
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

    </Canvas>
  );
}

export default App;
