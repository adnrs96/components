<template>
  <component
    :is="tagname"
    ref="self"
    :class="['ps', { 'ps--hidden': disableUi }]"
    @mouseover.once="update"
    @ps-scroll-y="scrollHandle"
    @ps-scroll-x="scrollHandle"
    @ps-scroll-up="scrollHandle"
    @ps-scroll-down="scrollHandle"
    @ps-scroll-left="scrollHandle"
    @ps-scroll-right="scrollHandle"
    @ps-y-reach-start="scrollHandle"
    @ps-y-reach-end="scrollHandle"
    @ps-x-reach-start="scrollHandle"
    @ps-x-reach-end="scrollHandle"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import PerfectScrollbar from 'perfect-scrollbar'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { IScrollbar } from '&/scrollbar'

/** perfect-scrollbar classes to keep: .ps__rail-x, .ps__rail-y, .ps__thumb-x, .ps__thumb-y, .ps--clicking, .ps--focus, .ps--scrolling-x, .ps--scrolling-y, .ps--active-y, .ps--active-x */
@Component({
  name: 'SScrollbar'
})
export default class SScrollbar extends Vue implements IScrollbar {
  @Prop({ type: Object, default: () => ({}) }) private settings!: PerfectScrollbar.Options
  @Prop({ type: Boolean, default: true }) private swicher!: boolean
  @Prop({ type: Boolean, default: false }) private disableUi!: boolean
  @Prop({ type: String, default: 'section' }) private tagname!: string

  private isPSInitialized = false
  private ps?: PerfectScrollbar = undefined
  private suppressScrollY = false

  private scrollHandle (e: any) {
    this.$emit(e.type, e)
  }

  private update () {
    if (this.ps) {
      this.ps.update()
    }
  }

  private init () {
    if (this.swicher) {
      if (!this.isPSInitialized) {
        this.isPSInitialized = true
        const settings = {
          ...this.settings,
          suppressScrollY: this.suppressScrollY,
          swipeEasing: true,
          wheelPropagation: true,
          minScrollbarLength: 0
        }
        if (this.$refs.self) {
          this.ps = new PerfectScrollbar(this.$refs.self as HTMLElement, settings)
        }
      } else {
        this.update()
      }
    }
  }

  private destroy () {
    if (this.ps) {
      this.ps.destroy()
      delete this.ps
      this.isPSInitialized = false
    }
  }

  @Watch('swicher') private onSwicherChange (val: boolean) {
    if (val && !this.isPSInitialized) {
      this.init()
    }
    if (!val && this.isPSInitialized) {
      this.destroy()
    }
  }

  @Watch('$route') private onRouteUpdate () {
    this.update()
  }

  setScrollingY (enable: boolean) {
    this.suppressScrollY = !enable
    if (enable) {
      this.init()
    } else {
      this.destroy()
    }
  }

  mounted () {
    // for support ssr
    if (!this.$isServer) {
      this.init()
    }
    ;(this as any).$storyscript.event.$on('stopScrolling', () => {
      this.setScrollingY(false)
    })
    ;(this as any).$storyscript.event.$on('startScrolling', () => {
      this.setScrollingY(true)
    })
  }

  updated () {
    this.$nextTick(this.update)
  }

  beforeDestroy () {
    this.destroy()
  }
}
</script>

<docs>
SScrollbar
```jsx
<s-scrollbar class="overflow-hidden h-32 w-full flex flex-col">
  <div>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</s-scrollbar>
```
</docs>
