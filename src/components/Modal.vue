<template>
  <s-scrollbar
    v-show="open"
    ref="modalScrollbar"
    class="w-full h-screen bg-gray-100 opacity-65 py-8"
  >
    <div
      v-click-outside="hide"
      :class="[
        'flex flex-col items-center w-auto max-w-lg mx-auto',
        rounded,
        bg
      ]"
    >
      <div class="w-full flex justify-end -mt-4 ml-4">
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
          padding
        ]"
      >
        <slot />
      </div>
    </div>
  </s-scrollbar>
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
    return 'pt-8 pb-10 px-24'
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
  <s-modal ref="modal">Ceci n'est pas une modal.</s-modal>
  <s-text-button id="percy-open-btn" size="small" accent @click="$refs.modal.show()">Open</s-text-button>
</div>
```
</docs>
