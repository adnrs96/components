<template>
  <div :class="['field', {disabled},{'has-addons': (hasAddons && isGrouped === undefined)},{[`has-addons-${hasAddons}`]: typeof hasAddons === typeof '' && isGrouped === undefined},{'is-grouped': isGrouped},{[`is-grouped-${isGrouped}`]: typeof isGrouped === typeof ''}]">
    <label
      v-if="label && type !== 'switch'"
      class="label"
      :for="`input-${_uid}`"
    >{{ label }}</label>
    <div
      v-if="(hasAddons || isGrouped) && $slots.left"
      class="control"
    >
      <slot name="left" />
    </div>
    <div :class="['control', {'has-icons-left': iconLeft}, {'has-icons-right': iconRight || valid !== undefined }, {'is-loading': loading}]">
      <component
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="`input-${_uid}`"
        :placeholder="placeholder"
        :disabled="disabled"
        :checked="type === 'switch' ? value : undefined"
        :type="type === 'switch' ? 'checkbox' : type === 'textarea' ? undefined : type"
        :class="[{'input': type !== 'textarea'}, {'textarea': type === 'textarea'}, {'has-fixed-size': fixed}, {'is-rtl': type === 'switch'}, {[`is-${size}`]: size !== 'normal'}, {'switch': type === 'switch'}, {'is-rounded': rounded}, {[`is-${valid ? 'success' : 'danger'}`]: valid !== undefined }, {[`has-background-${background}`]: background}]"
        :value="type !== 'switch' ? value : undefined"
        :readonly="readonly"
        :rows="rows"
        @input="$emit('input', type === 'switch' ? $event.target.checked : $event.target.value)"
        @blur="$emit('blur', $event)"
        @change="$emit('change', $event.target.value)"
      />
      <label
        v-if="label && type === 'switch'"
        class="label is-rtl"
        :for="`input-${_uid}`"
      >{{ label }}</label>
      <span
        v-if="iconLeft"
        :class="['icon', 'is-left', {[`is-${size}`]: size !== 'normal'}]"
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
        :class="['icon', 'is-right', {[`is-${size}`]: size !== 'normal'}]"
        @click="$emit('icon-valid')"
      >
        <i :class="`mdi mdi-${valid ? 'check' : 'close'} has-text-${valid ? 'success' : 'danger'}`" />
      </span>
      <span
        v-else-if="iconRight"
        :class="['icon', 'is-right', {[`is-${size}`]: size !== 'normal'}]"
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
    <p
      v-if="help"
      :class="['help', {[`is-${valid ? 'success' : 'danger'}`]: typeof valid === typeof true }]"
    >
      {{ help }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    disabled: { type: Boolean, default: undefined },
    hasAddons: { type: [Boolean, String], default: undefined, validator: v => [true, false, 'centered', 'right'].includes(v) },
    isGrouped: { type: [Boolean, String], default: undefined, validator: v => [true, false, 'centered', 'right'].includes(v) },
    background: { type: String, default: undefined },
    label: { type: String, default: undefined },
    type: {
      type: String,
      default: 'text',
      validator: v => ['text', 'email', 'password', 'tel', 'textarea', 'switch'].includes(v)
    },
    value: { type: [String, Boolean], default: '' },
    placeholder: { type: String, default: undefined },
    size: {
      type: String,
      default: 'normal',
      validator: v => ['small', 'normal', 'medium', 'large'].includes(v)
    },
    rounded: { type: Boolean, default: false },
    fixed: { type: Boolean, default: false },
    rows: { type: Number, default: undefined },
    readonly: { type: Boolean, default: undefined },
    loading: { type: Boolean, default: false },
    iconLeft: { type: [String, Array], default: undefined },
    iconRight: { type: [String, Array], default: undefined },
    valid: { type: Boolean, default: undefined },
    help: { type: String, default: undefined }
  }
}
</script>

<docs>
### Playground

```
new Vue({
  template: `
  <section>
    <a-input
      v-model="input"
      :icon-right="['a-icon', { icon: 'search' }]"
      size="large"
    />
    <a-input
      label="hello world"
      placeholder="hello world"
    />
    <a-input
      background="light"
      placeholder="hello world"
    />
    <a-input has-addons="centered" icon-left="email">
      <a slot="right" class="button"><i class="mdi mdi-magnify" /></a>
    </a-input>
    <a-container centered-v-h row>
    <a-div size="auto" v-tags>
      <a-tag outline>lol</a-tag>
      <a-input has-addons="centered" icon-left="tag-outline" size="small">
        <a slot="right" class="button is-small"><i class="mdi mdi-plus" /></a>
      </a-input>
      </a-div>
    </a-container>
    <a-input
      type="switch"
      v-model="checked"
      disabled
      label="hello world"
      background="light"
      placeholder="hello world"
    />
  </section>`,
  data: () => ({ input: 'value', checked: true }),
  watch: { input: function () { console.log('value :', this.input) }, checked: function () { console.log('checked', this.checked) } },
  methods: {
    reset: function () {
      console.log('reset')
    }
  }
})
```
</docs>
