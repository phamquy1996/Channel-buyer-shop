import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from './mutations'
import { State } from './state'
export enum ActionTypes {
  GetListCategory = "GET_LIST_CATEGORY",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetListCategory](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetListCategory]({ commit }) {
    commit(MutationType.SetTasks, [
      {
        id: 1,
        name: "Create a new programming language",
        image:
          "The programing language should have full typescript support ",
        status: 1
      },
    ]);
  },
};
