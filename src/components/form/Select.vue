<template>
  <div
    v-click-outside="close"
    class="field select-box"
  >
    <div
      class="control has-icons-right"
      @click="openOrClose"
    >
      <input
        :class="['input', {[`is-${size}`]: size !== 'normal'}, {'is-rounded': rounded}, {open}, {'is-loading': loading}, {'is-readonly': readonly}]"
        disabled="true"
        type="text"
        :value="value"
      >
      <span :class="['icon', 'is-right']">
        <i
          v-if="!foldIcon"
          :class="`mdi mdi-${open ? 'chevron-up' : 'chevron-down'}`"
        />
        <i
          v-else
          :class="`mdi mdi-${open ? 'unfold-less-horizontal' : 'unfold-more-horizontal'}`"
        />
      </span>
    </div>
    <div
      v-if="open && $slots.default"
      :class="['selectable', {absolute}]"
    >
      <ul class="selectable-items">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from '@/directives/ClickOutside'

export default {
  name: 'ASelect',
  directives: { ClickOutside },
  props: {
    readonly: { type: Boolean, default: false },
    absolute: { type: Boolean, default: false },
    foldIcon: { type: Boolean, default: false },
    value: { type: String, default: '' },
    rounded: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    isOpen: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'normal',
      validator: v => ['small', 'normal', 'medium', 'large'].includes(v)
    }
  },
  data: () => ({ open: false }),
  watch: {
    isOpen: function () {
      this.open = this.isOpen
    }
  },
  mounted: function () {
    this.open = this.isOpen
  },
  methods: {
    close: function () {
      if (this.open) {
        this.open = false
        this.$emit('close')
      }
    },
    openOrClose: function () {
      if (!this.readonly) {
        this.open = !this.open
        this.$emit(this.open ? 'open' : 'close')
      }
    }
  }
}
</script>

<docs>
### Playground

```
new Vue({
  template: `<section>
              <section>
                <a-select-box
                  fold-icon
                  value="Quick Start"
                />
              </section>
              <section class="has-padding-top-large">
                <a-select-box value="Quick Start" />
                <a-select-box value="Storyscript" />
                <a-select-box value="Blabla">
                  <li>Hello</li>
                  <li>Salut</li>
                </a-select-box>
              </section>
            </section>`,
  data: () => ({ input: 'value' }),
  watch: { input: function () { console.log('value :', this.input) } }
})
```
</docs>
