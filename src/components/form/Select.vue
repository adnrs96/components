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
  data: () => ({ invalidate: true, open: false }),
  watch: {
    isOpen: function () {
      this.invalidate = true
      this.open = this.isOpen
    }
  },
  mounted: function () {
    this.open = this.isOpen
  },
  methods: {
    close: function () {
      if (this.open && !this.invalidate) {
        this.open = false
        this.$emit('close')
      }
      this.invalidate = false
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
                <a-select
                  fold-icon
                  value="Quick Start"
                  :is-open.sync="isQSOpen"
                />
              </section>
              <section class="has-padding-top-large">
                <a-select value="Quick Start" />
                <a-select @open="isQSOpen = true" @close="isQSOpen = false" value="Storyscript" />
                <a-select value="Blabla">
                  <li>Hello</li>
                  <li>Salut</li>
                </a-select>
              </section>
            </section>`,
  data: () => ({ input: 'value', isQSOpen: false }),
  watch: { input: function () { console.log('value :', this.input) } }
})
```
</docs>
