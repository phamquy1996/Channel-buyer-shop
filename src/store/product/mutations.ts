import { MutationTree } from "vuex";
import { State, Category } from "./state";

export enum MutationType {
  CreateTask = "CREATE_TASK",
  SetTasks = "SET_TASKS",
  CompleteTask = "COMPLETE_TASK",
  RemoveTask = "REMOVE_TASK",
  EditTask = "EDIT_TASK",
  UpdateTask = `UPDATE_TASK`,

  SetLoading = "SET_LOADING",
  SetCreateModal = "SET_CREATE_MODAL",
  SetEditModal = "SET_EDIT_MODAL",
  SetTaskModal = "SET_TASK_MODAL",
}

export type Mutations = {
  [MutationType.SetTasks](state: State, tasks: Category[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetTasks](state, tasks) {
    state.listCategries = tasks
  },
}