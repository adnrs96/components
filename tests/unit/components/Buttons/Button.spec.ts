import Button from '@/components/Buttons/Button.vue'
import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { ThemeColorsEnum, AccentColorsEnum } from '&/theme'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('Button.vue', () => {
  describe('getters', () => {
    describe('rounded', () => {
      it('should return xl for regular and medium sizes', () => {
        const regular: Wrapper<Button> = shallowMount(Button, {
          store,
          localVue,
          propsData: {
            size: 'regular'
          }
        })
        const medium: Wrapper<Button> = shallowMount(Button, {
          store,
          localVue,
          propsData: {
            size: 'medium'
          }
        })
        expect((regular.vm as any).rounded).toEqual('rounded-xl')
        expect((medium.vm as any).rounded).toEqual('rounded-xl')
        regular.destroy()
        medium.destroy()
      })

      it('should return md for small, smaller and smallest sizez', () => {
        const small: Wrapper<Button> = shallowMount(Button, {
          store,
          localVue,
          propsData: {
            size: 'small'
          }
        })
        const smaller: Wrapper<Button> = shallowMount(Button, {
          store,
          localVue,
          propsData: {
            size: 'smaller'
          }
        })
        const smallest: Wrapper<Button> = shallowMount(Button, {
          store,
          localVue,
          propsData: {
            size: 'smallest'
          }
        })
        expect((small.vm as any).rounded).toEqual('rounded-md')
        expect((smaller.vm as any).rounded).toEqual('rounded-md')
        expect((smallest.vm as any).rounded).toEqual('rounded-md')
        small.destroy()
        smaller.destroy()
        smallest.destroy()
      })
    })

    describe('bg', () => {
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              describe('disabled', () => {
                it('should return bg-gray-20', () => {
                  const btn = shallowMount(Button, {
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
              it(`should return bg-${
                theme === 'DARK' ? 'white' : 'black'
              }`, () => {
                const btn = shallowMount(Button, {
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
      describe('accents', () => {
        for (const accent in AccentColorsEnum) {
          if (isNaN(Number(accent))) {
            describe(accent, () => {
              describe('disabled', () => {
                it(`should return bg-${accent.toLowerCase()}-20`, () => {
                  const btn = shallowMount(Button, {
                    store,
                    localVue,
                    propsData: {
                      disabled: true,
                      accent: true
                    }
                  })
                  store.commit('setAccentColor', AccentColorsEnum[accent])
                  expect((btn.vm as any).bg).toEqual(
                    `bg-${accent.toLowerCase()}-20`
                  )
                  btn.destroy()
                })
              })
              it(`should return bg-${accent.toLowerCase()}-70`, () => {
                const btn = shallowMount(Button, {
                  localVue,
                  store,
                  propsData: {
                    accent: true
                  }
                })
                store.commit('setAccentColor', AccentColorsEnum[accent])
                expect((btn.vm as any).bg).toEqual(
                  `bg-${accent.toLowerCase()}-70`
                )
                btn.destroy()
              })
            })
          }
        }
      })
    })

    describe('cursor', () => {
      describe('disabled', () => {
        it('should return cursor-not-allowed', () => {
          const btn = shallowMount(Button, {
            store,
            localVue,
            propsData: {
              disabled: true
            }
          })
          expect((btn.vm as any).cursor).toEqual('cursor-not-allowed')
          btn.destroy()
        })
      })
      it('should return cursor-pointer', () => {
        const btn = shallowMount(Button, {
          localVue,
          store
        })
        expect((btn.vm as any).cursor).toEqual('cursor-pointer')
        btn.destroy()
      })
    })

    describe('padding', () => {
      describe('themes', () => {
        for (const size of [
          'regular',
          'medium',
          'small',
          'smaller',
          'smallest'
        ]) {
          it(`should return ${
            size === 'small'
              ? 'p-3'
              : size === 'medium'
              ? 'p-7/8'
              : size === 'smaller'
              ? 'px-3 py-2'
              : size === 'smallest'
              ? 'px-3 py-1'
              : 'p-4'
          }`, () => {
            const btn: Wrapper<Button> = shallowMount(Button, {
              store,
              localVue,
              propsData: {
                size
              }
            })
            expect((btn.vm as any).padding).toEqual(
              size === 'small'
                ? 'p-3'
                : size === 'medium'
                  ? 'p-7/8'
                  : size === 'smaller'
                    ? 'px-3 py-2'
                    : size === 'smallest'
                      ? 'px-3 py-1'
                      : 'p-4'
            )
            btn.destroy()
          })
        }
      })
    })

    describe('active', () => {
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              describe('disabled', () => {
                it('should return nothing', () => {
                  const btn = shallowMount(Button, {
                    store,
                    localVue,
                    propsData: {
                      disabled: true
                    }
                  })
                  expect((btn.vm as any).active).toEqual('')
                  btn.destroy()
                })
              })
              it(`should return active:bg-gray-${
                theme === 'DARK' ? '10' : '90'
              }`, () => {
                const btn = shallowMount(Button, {
                  localVue,
                  store
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((btn.vm as any).active).toEqual(
                  `active:bg-gray-${theme === 'DARK' ? '10' : '90'}`
                )
                btn.destroy()
              })
            })
          }
        }
      })
      describe('accents', () => {
        for (const accent in AccentColorsEnum) {
          if (isNaN(Number(accent))) {
            describe(accent, () => {
              describe('disabled', () => {
                it('should return nothing', () => {
                  const btn = shallowMount(Button, {
                    store,
                    localVue,
                    propsData: {
                      disabled: true,
                      accent: true
                    }
                  })
                  store.commit('setAccentColor', AccentColorsEnum[accent])
                  expect((btn.vm as any).active).toEqual('')
                  btn.destroy()
                })
              })
              it(`should return active:bg-${accent.toLowerCase()}-90`, () => {
                const btn = shallowMount(Button, {
                  localVue,
                  store,
                  propsData: {
                    accent: true
                  }
                })
                store.commit('setAccentColor', AccentColorsEnum[accent])
                expect((btn.vm as any).active).toEqual(
                  `active:bg-${accent.toLowerCase()}-90`
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
