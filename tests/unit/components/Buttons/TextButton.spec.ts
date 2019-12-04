import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { ThemeColorsEnum } from '&/theme'
import TextButton from '@/components/Buttons/TextButton.vue'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('TextButton.vue', () => {
  describe('getters', () => {
    describe('defaultColor', () => {
      describe('disabled', () => {
        const btn: Wrapper<TextButton> = shallowMount(TextButton, {
          store,
          localVue,
          propsData: {
            disabled: true
          }
        })
        expect((btn.vm as any).defaultColor).toEqual('text-white')
        btn.destroy()
      })
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe('secondary', () => {
              it(`should return text-${theme !== 'LIGHT' ? 'white' : 'gray-50'}`, () => {
                const btn: Wrapper<TextButton> = shallowMount(TextButton, {
                  store,
                  localVue,
                  propsData: {
                    secondary: true
                  }
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).defaultColor).toEqual(`text-${theme !== 'LIGHT' ? 'white' : 'gray-50'}`)
                btn.destroy()
              })
            })
            describe(theme, () => {
              it(`should return text-${theme === 'LIGHT' ? 'white' : 'gray-50'}`, () => {
                const btn: Wrapper<TextButton> = shallowMount(TextButton, {
                  store,
                  localVue
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).defaultColor).toEqual(`text-${theme === 'LIGHT' ? 'white' : 'gray-50'}`)
                btn.destroy()
              })
            })
          }
        }
      })
    })
  })
})
