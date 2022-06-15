const PackBlock = ({
  position = [0, 0, 0],
  rotation = [0.1, 0, -0.1],
  onClick = () => {},
  bold = 0.5
}) => {

  return <mesh
    onClick={onClick}
    // @ts-ignore
    position={position}
    // @ts-ignore
    rotation={rotation}
  >
    <boxGeometry args={[2.2, bold, 1.1]} />
    <meshStandardMaterial color={'orange'} />
  </mesh>
}

export default PackBlock
