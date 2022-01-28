const Card = ({position}) => {
  return <mesh
    position={position}
    rotation={[0, 3, 0]}
  >
    <boxGeometry
      args={[1.2, 2, 0.1]}
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
