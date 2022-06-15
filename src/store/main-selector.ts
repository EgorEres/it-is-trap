import { shuffle } from 'lodash'

export const getMixedPack = (state: any) => {
  const mixedPack = shuffle(state.main.pack)

  return mixedPack
}