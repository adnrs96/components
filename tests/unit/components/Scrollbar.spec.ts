import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import Scrollbar from '@/components/Scrollbar.vue'
import { ThemeColorsEnum } from '&/theme'
import Vue from 'vue'

const slots = {
  default: '<div>Ceci n\'est aps une div</div>'
}
const mocks = {
  $storyscript: {
    theme: {
      color: ThemeColorsEnum.LIGHT
    },
    event: new Vue()
  }
}
const localVue = createLocalVue()

describe('Scrollbar.vue', () => {
  let scrollbar: Wrapper<Scrollbar>
  let vm: any

  beforeEach(() => {
    scrollbar = shallowMount(Scrollbar, {
      slots,
      mocks
    })
    vm = scrollbar.vm as any
  })

  afterEach(() => {
    scrollbar.destroy()
  })

  it('should call hooks', async (done) => {
    expect.assertions(2)
    vm.destroy = jest.fn()
    vm.update = jest.fn()
    vm.onRouteUpdate()
    scrollbar.vm.$forceUpdate()
    scrollbar.destroy()
    vm.$nextTick(() => {
      try {
        expect(vm.update).toHaveBeenCalledTimes(2)
        expect(vm.destroy).toHaveBeenCalledTimes(1)
        done()
      } catch (e) { done.fail(e) }
    })
  })

  describe('scrollHandle', () => {
    it('should emit the given event', () => {
      vm.scrollHandle({ type: 'scrollType' })
      expect(scrollbar.emitted().scrollType).toBeTruthy()
    })
  })

  describe('update', () => {
    describe('ps is defined', () => {
      it('should update', () => {
        vm.ps.update = jest.fn()
        vm.update()
        expect(vm.ps.update).toHaveBeenCalled()
      })
    })
    describe('ps is not defined', () => {
      it('should not update', () => {
        vm.ps = undefined
        vm.update()
        expect(vm.ps).toBe(undefined)
      })
    })
  })

  describe('init', () => {
    it('should update', () => {
      vm.update = jest.fn()
      vm.init()
      expect(vm.update).toHaveBeenCalled()
    })

    it('should not do anything', () => {
      vm.update = jest.fn()
      scrollbar.setProps({ swicher: false })
      vm.init()
      expect(vm.update).not.toHaveBeenCalled()
    })
  })

  describe('destroy', () => {
    it('should destroy', () => {
      vm.destroy()
      expect(vm).toHaveProperty('isPSInitialized', false)
    })

    it('should not destroy', () => {
      vm.ps = null
      vm.destroy()
      expect(vm).toHaveProperty('isPSInitialized', true)
    })
  })

  describe('setScrollingY', () => {
    it('should disable and call destroy', () => {
      vm.destroy = jest.fn()
      vm.init = jest.fn()
      vm.setScrollingY(false)
      expect(vm.destroy).toHaveBeenCalled()
      expect(vm.init).not.toHaveBeenCalled()
      expect(vm).toHaveProperty('suppressScrollY', true)
    })
  })

  describe('watchers', () => {
    describe('onSwitcherChange', () => {
      it('should call init', () => {
        vm.init = jest.fn()
        vm.destroy = jest.fn()
        vm.isPSInitialized = false
        vm.onSwicherChange(true)
        expect(vm.init).toHaveBeenCalled()
        expect(vm.destroy).not.toHaveBeenCalled()
      })

      it('should call destroy', () => {
        vm.init = jest.fn()
        vm.destroy = jest.fn()
        vm.isPSInitialized = true
        vm.onSwicherChange(false)
        expect(vm.destroy).toHaveBeenCalled()
        expect(vm.init).not.toHaveBeenCalled()
      })
    })

    describe('onRouteUpdate', () => {
      it('should update', () => {
        vm.update = jest.fn()
        vm.onRouteUpdate()
        expect(vm.update).toHaveBeenCalled()
      })
    })
  })

  describe('hooks', () => {
    describe('mounted', () => {
      it('should not init', () => {
        const init = jest.fn()
        Object.defineProperty(localVue.prototype, '$isServer', {
          get: () => true
        })
        const wrapper = shallowMount(Scrollbar, {
          localVue,
          methods: {
            init
          },
          mocks,
          slots
        })
        expect(init).not.toHaveBeenCalled()
        wrapper.destroy()
      })

      it('should listen on event', () => {
        const setScrollingY = jest.fn()
        const wrapper = shallowMount(Scrollbar, {
          methods: {
            setScrollingY
          },
          mocks,
          slots
        })
        vm.$storyscript.event.$emit('stopScrolling')
        expect(setScrollingY).toHaveBeenCalledWith(false)
        vm.$storyscript.event.$emit('startScrolling')
        expect(setScrollingY).toHaveBeenCalledWith(true)
        expect(setScrollingY).toHaveBeenCalledTimes(2)
        wrapper.destroy()
      })
    })
  })
})
