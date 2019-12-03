import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { ThemeColorsEnum } from '&/theme'
import GradientBorderButton from '@/components/Buttons/GradientBorderButton.vue'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('GradientBorderButton', () => {
  describe('getters', () => {
    describe('defaultColor', () => {
      describe('disabled', () => {
        it('should return text-gray-90', () => {
          const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
            store,
            localVue,
            propsData: {
              disabled: true
            }
          })
          expect((btn.vm as any).defaultColor).toEqual('text-gray-90')
          btn.destroy()
        })
      })
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              it(`should return text-${theme === 'DARK' ? 'gray-90' : 'white'}`, () => {
                const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
                  store,
                  localVue
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).defaultColor).toEqual(`text-${theme === 'DARK' ? 'gray-90' : 'white'}`)
                btn.destroy()
              })
            })
          }
        }
      })
    })
  })
})
