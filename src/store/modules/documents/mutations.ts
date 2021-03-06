import { MutationTree } from 'vuex';
import { Category, Subcategory, ChildCategory  } from './state'
import { State } from './state';
import { DocumentsMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [DocumentsMutationTypes.SET_DATA](state: S, payload: Category[]): void;
  [DocumentsMutationTypes.SET_SUBCATEGORY](state: S, value: {showModal: Number, payload: Subcategory[]}): void;
  [DocumentsMutationTypes.SET_CHILDSUBCATEGORY](state: S, value: {showModal: Number, payload: ChildCategory[]}): void;
  [DocumentsMutationTypes.SET_NAME_PRODUCT](state: S, value: { nameProduct: String }): void;
}
export const mutations: MutationTree<State> & Mutations = {
  [DocumentsMutationTypes.SET_DATA](state: State, categories: Category[]) {
    state.categories = categories;
  },
  [DocumentsMutationTypes.SET_SUBCATEGORY](state: State, value) {
    const task = state.categories.find(item => item.id === value.showModal)
    state.subcategoris = task?.subCategories
    state.childCategoris = []
  },
  [DocumentsMutationTypes.SET_CHILDSUBCATEGORY](state: State, value) {
    const task = state.subcategoris?.find(item => item.id === value.showModal)
    state.childCategoris = task?.childCategories
    state.category = task
  },
  [DocumentsMutationTypes.SET_NAME_PRODUCT](state: State, value) {
    state.nameProduct = value.nameProduct
    console.log(state.nameProduct)
  },
};
