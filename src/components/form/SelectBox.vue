<template>
  <div
    v-click-outside="close"
    class="field select-box"
    @click="open = !open"
  >
    <div class="control has-icons-right">
      <input
        :class="['input', {[`is-${size}`]: size !== 'normal'}, {'is-rounded': rounded}, {open}, {'is-loading': loading}]"
        disabled="true"
        type="text"
        :value="value"
      >
      <span :class="['icon', 'is-right']">
        <i :class="`mdi mdi-${open ? 'arrow-up' : 'arrow-down'}`" />
      </span>
    </div>
    <div
      v-if="open"
      class="selectable"
    >
      <transition-group
        tag="ul"
        name="fade"
      >
        <li
          v-if="open"
          key="hello"
        >
          Hello
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ClickOutside from '@/directives/ClickOutside'

export default {
  name: 'ASelectBox',
  directives: { ClickOutside },
  props: {
    value: { type: String, default: '' },
    rounded: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'normal',
      validator: v => ['small', 'normal', 'medium', 'large'].includes(v)
    }
  },
  data: () => ({ open: false }),
  methods: {
    close: function () {
      if (this.open) {
        this.open = false
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
              <a-select-box
                v-model="input"
              />
            </section>`,
  data: () => ({ input: 'value' }),
  watch: { input: function () { console.log('value :', this.input) } }
})
```
</docs>
