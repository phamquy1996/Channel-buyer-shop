import { MutationTree } from 'vuex';

import { UserDocuments } from '@/@types';
import { Category, Subcategory } from './state'
import { State, Categories, Subcategories } from './state';
import { DocumentsMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [DocumentsMutationTypes.SET_DATA](state: S, payload: Category[]): void;
  [DocumentsMutationTypes.SET_SUBCATEGORY](state: S, value: {showModal: Number, payload: Subcategory[]}): void;
  [DocumentsMutationTypes.SET_CHILDSUBCATEGORY](state: S, value: {showModal: Number, payload: Subcategory[]}): void;
}
export const mutations: MutationTree<State> & Mutations = {
  [DocumentsMutationTypes.SET_DATA](state: State, categories: Category[]) {
    state.categories = categories;
  },
  [DocumentsMutationTypes.SET_SUBCATEGORY](state: State, value) {
    const task = state.categories.find(item => item.id === value.showModal)
    state.subcategoris = task?.subCategories
  },
  [DocumentsMutationTypes.SET_CHILDSUBCATEGORY](state: State, value) {
    const task = state.categories.find(item => item.id === value.showModal)
    state.childCategoris = task?.childCategoris
    // console.log(state.subcategoris)
    // const task = state.subcategoris.find(item => item.id === value.showModal)
    // state.childCategoris = task?.childCategoris
  },
};
