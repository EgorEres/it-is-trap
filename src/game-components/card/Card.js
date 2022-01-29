const Card = ({
  position,
  rotation = [0, 3, 0],
  onClick = () => {}
}) => {
  return <mesh
    position={position}
    rotation={rotation}
    onClick={onClick}
  >
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
}

export default Card
