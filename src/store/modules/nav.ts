import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';
import { RootState, INavState } from '../store';

const getters: GetterTree<INavState, RootState> = {};

const mutations: MutationTree<INavState> = {
  init(state: INavState) {
    state.activeName = '';
    state.visible = false;
  },
  trigger(state: INavState, payload: any) {
    state.activeName = payload.activeName;
    state.visible = payload.visible;
  },
};

const actions: ActionTree<INavState, RootState> = {};

const nav: Module<INavState, RootState> = {
  namespaced: true,
  state: {
    activeName: '',
    visible: false,
  },
  getters,
  mutations,
  actions,
};

export default nav;
