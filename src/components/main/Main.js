import './Main.css'
import Canvas from '../../game-components/canvas/Canvas'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import dota2Pack from '../../static/packs/dota2-pack/dota2Pack'
import { setPackAction } from '../../store/main-slice'

const useActions = () => {
  const dispatch = useDispatch()
  return {
    setPack: useCallback((pack) => dispatch(setPackAction(pack)), [dispatch])
  }
}

const Main = () => {
  const { setPack } = useActions()
  useEffect(() => {
    setPack(dota2Pack)
  }, [setPack])
  return <div className="main-wrapper">
    <Canvas />
  </div>
}

export default Main
