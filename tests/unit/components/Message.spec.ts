import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import Message from '@/components/Message.vue'
import Vuex, { Store } from 'vuex'
import themeStore from '@/store/modules/Theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state: { ...themeStore.state },
  getters: { ...themeStore.getters },
  mutations: { ...themeStore.mutations }
})

describe('Message.vue', () => {
  describe('getters', () => {
    describe('color', () => {
      for (const level of ['success', 'warning', 'error']) {
        describe(level, () => {
          describe('darker', () => {
            it(`should return text-${
              level === 'success'
                ? 'green'
                : level === 'warning'
                ? 'yellow'
                : 'red'
            }-80`, () => {
              const message: Wrapper<Message> = shallowMount(Message, {
                store,
                localVue,
                propsData: {
                  level,
                  darker: true
                }
              })
              expect((message.vm as any).color).toEqual(
                `text-${
                  level === 'success'
                    ? 'green'
                    : level === 'warning'
                    ? 'yellow'
                    : 'red'
                }-80`
              )
              message.destroy()
            })
          })
          it(`should return text-${
            level === 'success'
              ? 'green'
              : level === 'warning'
              ? 'yellow'
              : 'red'
          }-70`, () => {
            const message: Wrapper<Message> = shallowMount(Message, {
              store,
              localVue,
              propsData: {
                level
              }
            })
            expect((message.vm as any).color).toEqual(
              `text-${
                level === 'success'
                  ? 'green'
                  : level === 'warning'
                  ? 'yellow'
                  : 'red'
              }-70`
            )
            message.destroy()
          })
        })
      }
    })
  })
})
