import { ActionTree, ActionContext } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import axios from 'axios'
import { State } from './state';
import { Mutations } from './mutations';
import { DocumentsMutationTypes } from './mutation-types';
import { DocumentsActionTypes } from './action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [DocumentsActionTypes.FETCH_DOCUMENTS](
    { commit }: AugmentedActionContext,
    someId: string, // Obsolete in here but left as an example
  ): Promise<boolean>;


  [DocumentsActionTypes.FILTER_SUBCATEGORY](
    { commit }: AugmentedActionContext,
    someId: Number, // Obsolete in here but left as an example
  ): Promise<boolean>;

  [DocumentsActionTypes.FILTER_CHILDSUBCATEGORY](
    { commit }: AugmentedActionContext,
    someId: Number, // Obsolete in here but left as an example
  ): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [DocumentsActionTypes.FETCH_DOCUMENTS]({ commit }, someId: string) {
    return new Promise(() => {
      setTimeout(() => {
        // console.debug('FETCH_DOCUMENTS', someId);
        axios.get(`http://localhost:8082/api/v1/allCate`)
        .then(res => {
          // console.log(res);
          console.log(res.data);
          commit(DocumentsMutationTypes.SET_DATA, res.data);
        })
        
        return true;
      });
    });
  },

  async [DocumentsActionTypes.FILTER_SUBCATEGORY]({ commit }, someId: number) {
    return new Promise(() => {
      setTimeout(() => {
        // console.debug('FETCH_DOCUMENTS', someId);
        axios.get(`http://localhost:8082/api/v1/allCate`)
        .then(res => {
          // console.log(res);
          console.log(res.data);
          commit(DocumentsMutationTypes.SET_SUBCATEGORY, {showModal: someId, payload: res.data});
        })
        
        return true;
      });
    });
  },

  async [DocumentsActionTypes.FILTER_CHILDSUBCATEGORY]({ commit }, someId: number) {
    return new Promise(() => {
      setTimeout(() => {
        axios.get(`http://localhost:8082/api/v1/allCate`)
        .then(res => {
          console.log(res.data);
          commit(DocumentsMutationTypes.SET_CHILDSUBCATEGORY, {showModal: someId, payload: res.data});
        })
        return true;
      });
    });
  },
};
