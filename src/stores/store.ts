import type { Course } from '@/interfaces/Course';
import type { Job } from '@/interfaces/Job';
import type { GithubRepository } from '@/interfaces/GithubRepository';
import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { Education } from '@/interfaces/Education';
import type { Technology } from '@/interfaces/Technology';

// define your typings for the store state
export interface State {
  count: number,
  drawer: boolean | null | undefined,
  courses: Array<Course> | null,
  jobs: Array<Job> | null,
  education: Array<Education> | null,
  technologies: Array<Technology> | null,
  repos: Array<GithubRepository> | null
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    drawer: null,
    repos: null,
    courses: null,
    jobs: null,
    education: null,
    technologies: null,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_COURSES (state, payload) {
      state.courses = payload
    },
    SET_JOBS (state, payload) {
      state.jobs = payload
    },
    SET_EDUCATION (state, payload) {
      state.education = payload
    },
    SET_TECHNOLOGIES (state, payload) {
      state.technologies = payload
    },
    SET_REPOS (state, payload) {
      state.repos = payload
    },
  },
});

export function useStore () {
  return baseUseStore(key)
}