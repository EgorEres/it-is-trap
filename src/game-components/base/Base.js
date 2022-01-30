const Base = ({position}) => {

  return <mesh
    // scale={1}
    onClick={(event) => console.log('on click by base', event)}
    onPointerOver={(event) => console.log('on pinter over')}
    onPointerOut={(event) => console.log('on pointer out')}
    position={position}
  >
    <boxGeometry args={[2, 1.5, .5]} />
    <meshStandardMaterial color={'green'} />
  </mesh>
}

export default Base
