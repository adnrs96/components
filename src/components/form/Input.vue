<template>
  <div :class="['field', {disabled}]">
    <div :class="['control', {'has-icons-left': iconLeft}, {'has-icons-right': iconRight}]">
      <input
        :class="['input', {[`is-${size}`]: size !== 'normal'}, {'is-rounded': rounded}, {'is-loading': loading}]"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event)"
        @change="$emit('change', $event.target.value)"
      >
      <span
        v-if="iconLeft"
        :class="['icon', 'is-left']"
      >
        <i :class="`mdi mdi-${iconLeft}`" />
      </span>
      <span
        v-if="valid !== undefined"
        :class="['icon', 'is-right']"
      >
        <i :class="`mdi mdi-${valid ? 'check' : 'close'} has-text-${valid ? 'success' : 'danger'}`" />
      </span>
      <span
        v-else-if="iconRight"
        :class="['icon', 'is-right']"
      >
        <i :class="`mdi mdi-${iconRight}`" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: 'text',
      validator: v => ['text', 'email', 'password', 'tel'].includes(v)
    },
    value: { type: String, default: '' },
    placeholder: { type: String, default: undefined },
    size: {
      type: String,
      default: 'normal',
      validator: v => ['small', 'normal', 'medium', 'large'].includes(v)
    },
    rounded: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    iconLeft: { type: String, default: undefined },
    iconRight: { type: String, default: undefined },
    valid: { type: Boolean, default: undefined }
  }
}
</script>

<docs>
### Playground

```
new Vue({
  template: `<section>
              <a-input
                v-model="input"
                icon-left="email"
                icon-right="magnify"
                size="large"
              />
            </section>`,
  data: () => ({ input: 'value' }),
  watch: { input: function () { console.log('value :', this.input) } }
})
```
</docs>
