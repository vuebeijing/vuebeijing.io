import Vue from 'vue'
import expect from 'expect'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from './navbar.vue'

// Ignores globally imported notification component
Vue.config.ignoredElements = ['notification']

const localVue = createLocalVue()
localVue.use(Vuex)

describe('======= Navbar Component =======>', () => {
  let store
  const userObject = {
    username: 'Bob4000',
    firstName: 'Robert',
    lastName: 'Downey Jr.',
    email: 'foop@poopedypoop.poo'
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        authentication: {
          namespaced: true,
          state: {},
          getters: {
            user: () => userObject
          },
          actions: {
            getAuthentication: jest.fn()
          }
        },
        internationalization: {
          namespaced: true,
          actions: {
            fetchPageLangData: jest.fn()
          }
        }
      }
    })
  })

  test('Navbar is a Vue instance', () => {
    const wrapper = shallowMount(Navbar, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
