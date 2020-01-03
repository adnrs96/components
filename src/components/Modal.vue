<template>
  <div
    v-show="open"
  >
    <div
      class="w-screen h-screen z-40 fixed inset-0 bg-gray-100 opacity-65"
    />
    <s-scrollbar
      ref="modalScrollbar"
      class="z-50 flex fixed inset-0 w-screen h-screen py-8 opacity-100"
    >
      <div
        v-click-outside="hide"
        :class="[
          'relative flex flex-col items-center w-fit-content m-auto max-w-2xl',
          rounded,
          bg
        ]"
      >
        <div class="absolute top-0 right-0 -mt-4 -mr-4">
          <div
            v-if="closable"
            id="modal-close-btn"
            class="w-8 h-8 bg-gray-30 rounded-full flex items-center justify-center cursor-pointer"
            @click="hide"
          >
            <s-icon
              icon="cross"
              clickable
            />
          </div>
        </div>
        <div
          :class="[
            padding,
            'w-full'
          ]"
        >
          <slot />
        </div>
      </div>
    </s-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { ThemeColorsEnum } from '&/theme'
import { IDisplay } from '&/display'
import SScrollbar from '@/components/Scrollbar.vue'

@Component({
  name: 'SModal'
})
export default class SModal extends Vue implements IDisplay {
  private open: boolean = false
  private enforce: boolean = false

  @Prop({ type: Boolean, default: true }) readonly closable!: boolean

  @Getter('getThemeColor')
  private readonly themeColor!: ThemeColorsEnum

  @Provide('show')
  public show () {
    setTimeout(() => (this.open = true), 50)
  }

  @Provide('hide')
  public hide () {
    if (this.open) {
      this.open = false
      this.$emit('hidden')
    }
  }

  @Watch('open')
  private onOpenWatcher () {
    if (this.enforce) {
      this.enforce = false
      setTimeout(() => (this.open = false), 60)
    }
    const ps = this.$refs.modalScrollbar as SScrollbar
    if (this.open) {
      document.documentElement.classList.add('overflow-hidden')
      ;(this as any).$storyscript.event.$emit('stopScrolling')
      ps.setScrollingY(true)
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      ;(this as any).$storyscript.event.$emit('startScrolling')
    }
  }

  private get rounded (): string {
    return 'rounded-2xl'
  }

  private get padding (): string {
    return 'pt-10 pb-16 px-28'
  }

  private get bg (): string {
    return this.themeColor === ThemeColorsEnum.LIGHT ? 'bg-white' : 'bg-gray-100'
  }

  get forceHide (): boolean {
    return this.enforce
  }

  set forceHide (enforce: boolean) {
    this.enforce = enforce
  }
}
</script>

<docs>
SModal

```
<div>
  <s-modal ref="modal">
    <div class="flex items-center justify-center">Ceci n'est pas une modal.</div>
  </s-modal>
  <s-text-button id="percy-open-btn" size="small" accent @click="$refs.modal.show()">Open</s-text-button>
</div>
```
</docs>
