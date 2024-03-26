import type { GithubRepository } from '@/interfaces/GithubRepository';
import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  count: number,
  drawer: boolean | null | undefined,
  loading: boolean,
  errored: boolean,
  repos: Array<GithubRepository> | null
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    drawer: null,
    loading: true,
    errored: false,
    repos: null
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ERRORED (state, payload) {
      state.errored = payload
    },
    SET_REPOS (state, payload) {
      state.repos = payload
    },
  },
});

export function useStore () {
  return baseUseStore(key)
}