import { ThemeColorsEnum } from '&/theme'
import Vue from 'vue'
import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const mocks = {
  $storyscript: {
    theme: {
      color: ThemeColorsEnum.LIGHT
    },
    event: new Vue()
  }
}
const stubs = {
  's-scrollbar': '<div />'
}
const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('Modal.vue', () => {
  let modal: Wrapper<Modal>
  let vm: any
  let ps: any

  beforeEach(() => {
    modal = shallowMount(Modal, {
      mocks,
      stubs,
      localVue,
      store
    })
    vm = modal.vm as any
    ps = vm.$refs.modalScrollbar as any
    ps.setScrollingY = jest.fn()
  })

  afterEach(() => {
    modal.destroy()
  })

  describe('providers', () => {
    describe('show', () => {
      it('should open after a delay', async () => {
        expect.assertions(2)
        vm.open = false
        vm.show()
        expect(vm.open).toBeFalsy()
        await new Promise((resolve: Function) => setTimeout(resolve, 100))
        expect(vm.open).toBeTruthy()
      })
      it('should open but close directly', async () => {
        vm.enforce = true
        vm.open = false
        vm.show()
        vm.onOpenWatcher()
        await new Promise((resolve: Function) => setTimeout(resolve, 100))
        expect(vm.open).toBeFalsy()
      })
    })
    describe('hide', () => {
      describe('opened', () => {
        it('should close and emit', () => {
          vm.open = true
          vm.hide()
          expect(vm.open).toBeFalsy()
          expect(modal.emitted().hidden).toBeTruthy()
        })
      })
      describe('closed', () => {
        it('should not do anything', () => {
          vm.open = false
          vm.hide()
          expect(modal.emitted().hidden).toBeFalsy()
          expect(vm.open).toBeFalsy()
        })
      })
    })
  })

  describe('getters', () => {
    describe('forceHide', () => {
      it('should return true', () => {
        vm.enforce = true
        expect(vm.forceHide).toBeTruthy()
      })
      it('should return false', () => {
        vm.enforce = false
        expect(vm.forceHide).toBeFalsy()
      })
    })
    describe('rounded', () => {
      it('should return \'rounded-2xl\'', () => {
        expect(vm.rounded).toEqual('rounded-2xl')
      })
    })
    describe('padding', () => {
      it('should return \'pt-10 pb-16 px-28\'', () => {
        expect(vm.padding).toEqual('pt-10 pb-16 px-28')
      })
    })
    describe('bg', () => {
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              it(`should return ${theme === 'LIGHT' ? 'bg-white' : 'bg-gray-100'}`, () => {
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect(vm.bg).toEqual(theme === 'LIGHT' ? 'bg-white' : 'bg-gray-100')
              })
            })
          }
        }
      })
    })
  })

  describe('setters', () => {
    describe('forceHide', () => {
      it('should set enforce', () => {
        vm.enforce = false
        vm.forceHide = true
        expect(vm.enforce).toBeTruthy()
      })
    })
  })
})
