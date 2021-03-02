import { GetterTree } from 'vuex'
import { State, Category } from './state'
export type Getters = {
  getTaskById(state: State): (id :number) => Category | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  getTaskById: (state) => (id: number) => {
    return state.listCategries.find(task => task.id === id)
  }
}