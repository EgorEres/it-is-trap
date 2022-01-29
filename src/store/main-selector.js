import { shuffle } from 'lodash'

export const getMixedPack = (state) => {
  const mixedPack = shuffle(state.main.pack)

  return mixedPack
}