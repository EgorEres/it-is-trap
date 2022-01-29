import './Main.css'
import Canvas from '../../game-components/canvas/Canvas'
import { useEffect } from 'react'
import socket from '../api/socket'

const Main = () => {
  useEffect(() => {
    console.log(socket)
    socket.io.emit('massage', 'hello server')
  }, [])
  return <div className="main-wrapper">
    <Canvas />
  </div>
}

export default Main
