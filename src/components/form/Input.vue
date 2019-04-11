<template>
  <div :class="['field', {disabled},{'has-addons': (hasAddons && isGrouped === undefined)},{[`has-addons-${hasAddons}`]: typeof hasAddons === typeof '' && isGrouped === undefined},{'is-grouped': isGrouped},{[`is-grouped-${isGrouped}`]: typeof isGrouped === typeof ''}]">
    <div
      v-if="(hasAddons || isGrouped) && $slots.left"
      class="control"
    >
      <slot name="left" />
    </div>
    <div :class="['control', {'has-icons-left': iconLeft}, {'has-icons-right': iconRight}, {'is-expanded': expanded}]">
      <input
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        :class="['input', {[`is-${size}`]: size !== 'normal'}, {'is-rounded': rounded}, {'is-loading': loading}, {[`has-background-${background}`]: background}]"
        :value="value"
        :readonly="readonly"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event)"
        @change="$emit('change', $event.target.value)"
      >
      <span
        v-if="iconLeft"
        :class="['icon', 'is-left']"
      >
        <i
          v-if="typeof iconLeft === typeof ''"
          :class="`mdi mdi-${iconLeft}`"
        />
        <component
          :is="iconLeft[0]"
          v-else
          v-bind="iconLeft[1]"
        />
      </span>
      <span
        v-if="valid !== undefined"
        :class="['icon', 'is-right']"
        @click="$emit('icon-valid')"
      >
        <i :class="`mdi mdi-${valid ? 'check' : 'close'} has-text-${valid ? 'success' : 'danger'}`" />
      </span>
      <span
        v-else-if="iconRight"
        :class="['icon', 'is-right']"
      >
        <i
          v-if="typeof iconRight === typeof ''"
          :class="`mdi mdi-${iconRight}`"
        />
        <component
          :is="iconRight[0]"
          v-else
          v-bind="iconRight[1]"
        />
      </span>
    </div>
    <div
      v-if="(hasAddons || isGrouped) && $slots.right"
      class="control"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    disabled: { type: Boolean, default: undefined },
    hasAddons: { type: [Boolean, String], default: undefined, validator: v => [true, false, 'centered', 'right'].includes(v) },
    isGrouped: { type: [Boolean, String], default: undefined, validator: v => [true, false, 'centered', 'right'].includes(v) },
    expanded: { type: Boolean, default: undefined },
    background: { type: String, default: undefined },
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
    readonly: { type: Boolean, default: undefined },
    loading: { type: Boolean, default: false },
    iconLeft: { type: [String, Array], default: undefined },
    iconRight: { type: [String, Array], default: undefined },
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
                :icon-right="['a-icon', { icon: 'search' }]"
                size="large"
              />
              <a-input
                placeholder="hello world"
              />
              <a-input
                background="light"
                placeholder="hello world"
              />
              <a-input has-addons="centered" icon-left="email">
                <template slot="right">
  <a class="button">
    <i class="mdi mdi-magnify" />
  </a>
</template>
              </a-input>
            </section>`,
  data: () => ({ input: 'value' }),
  watch: { input: function () { console.log('value :', this.input) } },
  methods: {
    reset: function () {
      console.log('reset')
    }
  }
})
```
</docs>
