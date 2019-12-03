import { ThemeColorsEnum } from '&/theme'
import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils'
import Text from '@/components/Text.vue'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('Text.vue', () => {
  describe('getters', () => {
    describe('defaultColor', () => {
      describe('themes', () => {
        for (const theme in ThemeColorsEnum) {
          if (isNaN(Number(theme))) {
            describe(theme, () => {
              it(`should return text-${theme === 'DARK' ? 'white' : 'black'}`, () => {
                const text: Wrapper<Text> = shallowMount(Text, {
                  store,
                  localVue
                })
                store.commit('setThemeColor', ThemeColorsEnum[theme])
                expect((text.vm as any).defaultColor).toEqual(`text-${theme === 'DARK' ? 'white' : 'black'}`)
                text.destroy()
              })
            })
          }
        }
      })
    })

    describe('fontSize', () => {
      describe('headings', () => {
        it('should return text-5xl for and h1', () => {
          const text: Wrapper<Text> = shallowMount(Text, {
            store,
            localVue,
            propsData: {
              h: '1'
            }
          })
          expect((text.vm as any).fontSize).toEqual('text-5xl')
          text.destroy()
        })
        it('should return text-2xl for and h2', () => {
          const text: Wrapper<Text> = shallowMount(Text, {
            store,
            localVue,
            propsData: {
              h: '2'
            }
          })
          expect((text.vm as any).fontSize).toEqual('text-2xl')
          text.destroy()
        })
      })
      describe('paragraphs', () => {
        for (const p of ['1', '2', '3', '4', '5']) {
          describe(`p${p}`, () => {
            it(`should return text-${p === '1' ? 'lg' : p === '3' ? 'sm' : p && ['4', '5'].includes(p) ? 'xs' : 'base'}`, () => {
              const text: Wrapper<Text> = shallowMount(Text, {
                store,
                localVue,
                propsData: {
                  p: `${p}`
                }
              })
              expect((text.vm as any).fontSize).toEqual(`text-${p === '1' ? 'lg' : p === '3' ? 'sm' : p && ['4', '5'].includes(p) ? 'xs' : 'base'}`)
              text.destroy()
            })
          })
        }
      })
    })

    describe('letterSpacing', () => {
      describe('paragraphs', () => {
        for (const p of ['1', '2', '3', '4', '5']) {
          describe(`p${p}`, () => {
            it(`should return tracking-${p && ['3', '5'].includes(p) ? 'wider' : p && ['4', '6'].includes(p) ? 'wide' : 'normal'}`, () => {
              const text: Wrapper<Text> = shallowMount(Text, {
                store,
                localVue,
                propsData: {
                  p: `${p}`
                }
              })
              expect((text.vm as any).letterSpacing).toEqual(`tracking-${p && ['3', '5'].includes(p) ? 'wider' : p && ['4', '6'].includes(p) ? 'wide' : 'normal'}`)
              text.destroy()
            })
          })
        }
      })
    })

    describe('fontWeight', () => {
      for (const w of ['regular', 'medium', 'semibold', 'bold']) {
        describe(w, () => {
          it(`should return font-${w === 'regular' ? 'normal' : w}`, () => {
            const text: Wrapper<Text> = shallowMount(Text, {
              store,
              localVue,
              propsData: {
                weight: w
              }
            })
            expect((text.vm as any).fontWeight).toEqual(`font-${w === 'regular' ? 'normal' : w}`)
          })
        })
      }
    })

    describe('alignment', () => {
      for (const a of ['left', 'right', 'center', 'justify']) {
        describe(a, () => {
          it(`should return text-${a || 'left'}`, () => {
            const text: Wrapper<Text> = shallowMount(Text, {
              store,
              localVue,
              propsData: {
                align: a !== 'left' ? a : undefined
              }
            })
            expect((text.vm as any).alignment).toEqual(`text-${a || 'left'}`)
          })
        })
      }
    })

    describe('getTag', () => {
      for (const t of ['li', 'span', 'h', 'p']) {
        describe(t, () => {
          it(`should return ${t !== ('h' || 'p') ? t : t === 'h' ? 'h1' : 'p'}`, () => {
            const text: Wrapper<Text> = shallowMount(Text, {
              store,
              localVue,
              propsData: {
                tag: t === 'li' ? 'li' : t === 'span' ? 'span' : undefined,
                h: t === 'h' ? '1' : undefined,
                p: t === 'p' ? '1' : undefined
              }
            })
            expect((text.vm as any).getTag).toEqual(`${t !== ('h' || 'p') ? t : t === 'h' ? 'h1' : 'p'}`)
          })
        })
      }
    })
  })
})
