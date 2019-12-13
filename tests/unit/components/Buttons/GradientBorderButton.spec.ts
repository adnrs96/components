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
        it('should return text-gray-100', () => {
          const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
            store,
            localVue,
            propsData: {
              disabled: true
            },
            stubs: {
              's-text': '<div />'
            }
          })
          expect((btn.vm as any).defaultColor).toEqual('text-gray-100')
          btn.destroy()
        })
      })
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              describe('secondary', () => {
                it(`should return text-${theme !== 'DARK' ? 'gray-100' : 'white'}`, () => {
                  const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
                    store,
                    localVue,
                    propsData: {
                      secondary: true
                    },
                    stubs: {
                      's-text': '<div />'
                    }
                  })
                  store.commit('setThemeColor', ThemeColorsEnum[theme])
                  expect((btn.vm as any).defaultColor).toEqual(`text-${theme !== 'DARK' ? 'gray-100' : 'white'}`)
                  btn.destroy()
                })
              })
              it(`should return text-${theme === 'DARK' ? 'gray-100' : 'white'}`, () => {
                const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
                  store,
                  localVue,
                  stubs: {
                    's-text': '<div />'
                  }
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).defaultColor).toEqual(`text-${theme === 'DARK' ? 'gray-100' : 'white'}`)
                btn.destroy()
              })
            })
          }
        }
      })
    })

    describe('rounded', () => {
      it('should return \'rounded-sm\'', () => {
        const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
          store,
          localVue,
          stubs: {
            's-text': '<div />'
          }
        })
        expect((btn.vm as any).rounded).toEqual('rounded-md')
        btn.destroy()
      })
    })

    describe('active', () => {
      describe('disabled', () => {
        it('should return nothing', () => {
          const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
            store,
            localVue,
            stubs: {
              's-text': '<div />'
            },
            propsData: {
              disabled: true
            }
          })
          expect((btn.vm as any).active).toEqual('')
          btn.destroy()
        })
      })
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              describe('secondary', () => {
                it(`should return 'active:bg-gray-${theme !== 'DARK' ? '10' : '90'}'`, () => {
                  const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
                    store,
                    localVue,
                    stubs: {
                      's-text': '<div />'
                    },
                    propsData: {
                      secondary: true
                    }
                  })
                  store.commit('setThemeColor', ThemeColorsEnum[theme])
                  expect((btn.vm as any).active).toEqual(`active:bg-gray-${theme !== 'DARK' ? '10' : '90'}`)
                  btn.destroy()
                })
              })
              it(`should return 'active:bg-gray-${theme === 'DARK' ? '10' : '90'}'`, () => {
                const btn: Wrapper<GradientBorderButton> = shallowMount(GradientBorderButton, {
                  store,
                  localVue,
                  stubs: {
                    's-text': '<div />'
                  }
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).active).toEqual(`active:bg-gray-${theme === 'DARK' ? '10' : '90'}`)
                btn.destroy()
              })
            })
          }
        }
      })
    })

    describe('bg', () => {
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              describe('disabled', () => {
                it('should return bg-gray-20', () => {
                  const btn = shallowMount(GradientBorderButton, {
                    store,
                    localVue,
                    propsData: {
                      disabled: true
                    }
                  })
                  expect((btn.vm as any).bg).toEqual('bg-gray-20')
                  btn.destroy()
                })
              })
              describe('secondary', () => {
                it(`should return bg-${
                  theme !== 'DARK' ? 'white' : 'black'
                }`, () => {
                  const btn = shallowMount(GradientBorderButton, {
                    localVue,
                    store,
                    propsData: {
                      secondary: true
                    }
                  })
                  store.commit('setThemeColor', ThemeColorsEnum[theme])
                  expect((btn.vm as any).bg).toEqual(
                    `bg-${theme !== 'DARK' ? 'white' : 'black'}`
                  )
                  btn.destroy()
                })
              })
              it(`should return bg-${
                theme === 'DARK' ? 'white' : 'black'
              }`, () => {
                const btn = shallowMount(GradientBorderButton, {
                  localVue,
                  store
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).bg).toEqual(
                  `bg-${theme === 'DARK' ? 'white' : 'black'}`
                )
                btn.destroy()
              })
            })
          }
        }
      })
    })
  })
})
