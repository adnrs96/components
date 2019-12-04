import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import Icon from '@/components/Icon/Icon.vue'
import { IPath, IIcon } from '&/icon'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'
const icons = require('@/components/Icon/icons.json')

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('Icon.vue', () => {
  const propsData = {
    icon: icons[0].name
  }
  describe('getters', () => {
    describe('current', () => {
      it('should return the icon when provided in prop', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        expect((icon.vm as any).current).toEqual(icons[0])
        icon.destroy()
      })
      it('should return an empty icon when none is provided', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData: {
            icon: icons[0].name
          }
        })
        icon.setProps({ icon: 'invalid' })
        expect((icon.vm as any).current).toEqual((icon.vm as any).emptyIcon)
        icon.destroy()
      })
    })
    describe('cursor', () => {
      it('should return cursor-pointer when clickable', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ clickable: true })
        expect((icon.vm as any).cursor).toEqual('cursor-pointer')
        icon.destroy()
      })
      it('should return cursor-default when not clickable', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        expect((icon.vm as any).cursor).toEqual('cursor-default')
        icon.destroy()
      })
    })
    describe('viewBox', () => {
      it(`should return '0 0 ${icons[0].width} ${icons[0].height}' for icon ${icons[0].name}`, () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ icon: icons[0].name })
        expect((icon.vm as any).viewBox).toEqual(`0 0 ${icons[0].width} ${icons[0].height}`)
        icon.destroy()
      })
    })
    describe('stroke', () => {
      it('should return nothing when there is no stroke in the icon', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ icon: 'github-o' })
        expect((icon.vm as any).stroke).toEqual('')
        icon.destroy()
      })
      it('should return \'stroke-current\' when there is a stroke in the icon', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ icon: 'circle' })
        expect((icon.vm as any).stroke).toEqual('stroke-current')
        icon.destroy()
      })
    })
    describe('fill', () => {
      it('should return nothing when there is no fill in the icon', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ icon: 'github-o' })
        expect((icon.vm as any).fill).toEqual('fill-current')
        icon.destroy()
      })
      it('should return \'fill-current\' when there is a fill in the icon', () => {
        const icon: Wrapper<Icon> = shallowMount(Icon, {
          store,
          localVue,
          propsData
        })
        icon.setProps({ icon: 'key' })
        expect((icon.vm as any).fill).toEqual('')
        icon.destroy()
      })
    })
    describe('storyLogoFill', () => {
      describe('is not story', () => {
        describe('has fill property', () => {
          it('should return the provided fill', () => {
            const icon: Wrapper<Icon> = shallowMount(Icon, {
              store,
              localVue,
              propsData
            })
            expect((icon.vm as any).storyLogoFill(icons[0].path, -1)).toEqual(icons[0].path?.fill)
            icon.destroy()
          })
        })
        describe('has no fill property', () => {
          it('should return \'undefined\'', () => {
            const icon: Wrapper<Icon> = shallowMount(Icon, {
              store,
              localVue,
              propsData
            })
            icon.setProps({ icon: 'key' })
            expect((icon.vm as any).storyLogoFill(icons.find((i: IIcon) => i.name === 'key')?.path, -1)).toEqual(undefined)
            icon.destroy()
          })
        })
      })
      describe('is story', () => {
        describe('default color', () => {
          let i = 0
          for (const c of ['#6E66FF', '#FE585A', '#96C8EB', '#FFB81E', '#FFB81E']) {
            it(`should return ${c} for the ${i}th part`, () => {
              const icon: Wrapper<Icon> = shallowMount(Icon, {
                store,
                localVue,
                propsData
              })
              icon.setProps({ icon: 'story' })
              expect((icon.vm as any).storyLogoFill((icons.find((i: IIcon) => i.name === 'story')?.path as IPath[])[i], -1)).toEqual(undefined)
              icon.destroy()
            })
            ++i
          }
        })
        describe('given color', () => {
          it('should return the provided fill', () => {
            const icon: Wrapper<Icon> = shallowMount(Icon, {
              store,
              localVue,
              propsData
            })
            icon.setProps({ icon: 'story' })
            icon.setProps({ color: 'text-indigo-50' })
            expect((icon.vm as any).storyLogoFill(icons[0].path, -1)).toEqual(icons[0].path?.fill)
            icon.destroy()
          })
        })
      })
    })
    describe('path', () => {
      describe('path is not Array', () => {
        it('should return the icon path in an array', () => {
          const icon: Wrapper<Icon> = shallowMount(Icon, {
            store,
            localVue,
            propsData
          })
          expect((icon.vm as any).path).toEqual([icons[0].path])
          icon.destroy()
        })
      })
      describe('path is an Array', () => {
        it('should return the icon paths Array', () => {
          const icon: Wrapper<Icon> = shallowMount(Icon, {
            store,
            localVue,
            propsData
          })
          icon.setProps({ icon: 'story' })
          expect((icon.vm as any).path).toEqual(icons.find((i: IIcon) => i.name === 'story')?.path)
          icon.destroy()
        })
      })
    })
    describe('circle', () => {
      describe('circle is not Array', () => {
        it('should return the icon circle in an array', () => {
          const icon: Wrapper<Icon> = shallowMount(Icon, {
            store,
            localVue,
            propsData
          })
          icon.setProps({ icon: 'dot' })
          expect((icon.vm as any).circle).toEqual([icons.find((i: IIcon) => i.name === 'dot')?.circle])
          icon.destroy()
        })
      })
      // We don't have any icon with an Array of circles
    })
    describe('defs', () => {
      describe('icon has no defs', () => {
        it('should return \'undefined', () => {
          const icon: Wrapper<Icon> = shallowMount(Icon, {
            store,
            localVue,
            propsData
          })
          expect((icon.vm as any).defs).toEqual(undefined)
          icon.destroy()
        })
      })
      describe('icon has defs', () => {
        it('should return the icon defs', () => {
          const icon: Wrapper<Icon> = shallowMount(Icon, {
            store,
            localVue,
            propsData
          })
          icon.setProps({ icon: 'heart' })
          expect((icon.vm as any).defs).toEqual(icons.find((i: IIcon) => i.name === 'heart')?.defs)
          icon.destroy()
        })
      })
    })
  })
})
