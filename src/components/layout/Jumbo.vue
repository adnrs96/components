<template>
  <s-layout
    hero
    :class="['jumbo', { [`is-${size}`]: size }, {'has-background': background}]"
  >
    <template slot="head">
      <slot name="header" />
    </template>
    <template slot="body">
      <s-div
        v-if="$slots.small || small"
        size="full"
      >
        <s-text
          highlight
          color="gray-2"
          alignment="centered"
        >
          <template v-if="$slots.small">
            <slot name="small" />
          </template>
          <template v-else>
            {{ small }}
          </template>
        </s-text>
      </s-div>
      <s-div
        v-if="$slots.title || title"
        size="full"
      >
        <s-text
          head="1"
          alignment="centered"
          :class="{[`into-${into}`]: into }"
        >
          <span v-if="into" />
          <span>
            <template v-if="$slots.title">
              <slot name="title" />
            </template>
            <template v-else>
              {{ title }}
            </template>
          </span>
          <span v-if="into" />
        </s-text>
      </s-div>
      <s-div size="full">
        <slot />
      </s-div>
    </template>
    <template slot="footer">
      <slot name="footer" />
    </template>
  </s-layout>
</template>

<script>
export default {
  name: 'SJumbo',
  props: {
    /**
     * The title of the jumbo
     */
    title: {
      type: String,
      default: undefined
    },
    /**
     * The top description
     */
    small: {
      type: String,
      default: undefined
    },
    /** The outside character of the title
     *
     * possible values: `bracket, chevron, slash`
     */
    into: {
      type: String,
      default: undefined,
      validator: v => ['bracket', 'chevron', 'hash', 'slash'].includes(v)
    },
    /**
     * Sets the stars background
     */
    stars: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: undefined,
      validator: v => ['small', 'normal', 'medium', 'large', 'fullheight'].includes(v)
    },
    background: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<docs>
### Playground

```jsx
<s-jumbo
  size="fullheight"
  small="developer marketplace runtime"
  background
>
  <s-navbar
    slot="header"
    :items="[{ name: 'Blog' }, { name: 'Documentation' }]"
  />
  <template slot="title">Storyscript amplifies <br /> the developer</template>
  <s-container>
    <s-div size="full">
      <s-form-beta />
    </s-div>
  </s-container>
  <s-div
    size="full"
    slot="footer"
    class="has-text-centered"
  >
    <s-icon icon="separator" />
    <s-text
      alignment="centered"
      p="2"
    >Discover our mission to raise <br />any developer into a 10x developer.</s-text>
    <s-icon
      icon="arrow-down"
      stroke="#0a0a0a"
    />
  </s-div>
</s-jumbo>
```
</docs>
