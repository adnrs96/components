<template>
  <span
    :class="classes"
    @click="onClick"
  >
    <slot />
    <button
      v-if="deletable && !deleteOnly"
      class="delete is-small"
      @click.stop="onClick"
    />
  </span>
</template>

<script>
export default {
  name: 'ATag',
  props: {
    rounded: { type: Boolean, default: false },
    color: { type: String, default: undefined },
    outline: { type: Boolean, default: false },
    deletable: { type: Boolean, default: false },
    deleteOnly: { type: Boolean, default: false }
  },
  computed: {
    classes: function () {
      return [
        'tag',
        { 'is-rounded': this.rounded },
        { [`is-${this.color}`]: this.color },
        { 'is-delete': this.deleteOnly },
        { 'is-outline': this.outline }
      ]
    }
  },
  methods: {
    /**
      * Click event.
      *
      * @event click
      * @type {object}
      */
    onClick: function (e) {
      const type = e.target.classList.contains('delete') || e.target.classList.contains('is-delete') ? 'delete' : 'click'
      this.$emit('click', { ...e, type })
    }
  }
}
</script>

<docs>
### Playground

```
  new Vue({
    template: `
      <section v-tags>
        <a-tag @click="onClick" delete-only />
        <a-tag @click="onClick" deletable>lol</a-tag>
        <a-tag color="primary">lol</a-tag>
        <a-tag outline>lol</a-tag>
      </section>`,
    methods: {
      onClick: function (e) {
        console.log(e.type)
      }
    }
  })
```
</docs>
