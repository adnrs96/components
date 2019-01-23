<template>
  <nav
    :class="['navbar', { 'dark': dark }]"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a
          :class="['navbar-item', { 'fill--white': dark }]"
          @click="$emit('logo', $event)"
        >
          <a-logo icon />
          <span class="is-separator" />
          <a-logo />
        </a>
        <a
          v-if="items.length > 0"
          role="button"
          aria-label="menu"
          :aria-expanded="active"
          :class="['navbar-burger', 'burger', { 'is-active': active }]"
          :data-target="`navbar-${_uid}`"
          @click.stop="active = !active"
        >
          <span />
          <span />
        </a>
      </div>
      <transition name="navbar-collapse">
        <div
          :id="`navbar-${_uid}`"
          :class="['navbar-menu', { 'is-active': active }]"
        >
          <div class="navbar-end">
            <component
              :is="item.button ? 'span' : item.route ? 'router-link' : 'a'"
              v-for="(item, id) of items"
              :key="`navbar-${_uid}-item-${id}`"
              :href="!item.button && !item.route ? item.link : undefined"
              :to="item.route ? item.route : undefined"
              :title="item.name"
              :class="['navbar-item', { 'is-active': item.active }, { 'has-button': item.button }]"
            >
              <a-button
                v-if="item.button"
                v-bind="item.button"
                @click="$emit('click', {$event, item})"
              >
                <template v-if="item.icon">
                  <span class="icon">
                    <i :class="`mdi mdi-${item.icon}`" />
                  </span>
                  <span>{{ item.name }}</span>
                </template>
                <template v-else>
                  {{ item.name }}
                </template>
              </a-button>
              <template v-else-if="item.icon">
                <span class="icon">
                  <i :class="`mdi mdi-${item.icon}`" />
                </span>
                <span>{{ item.name }}</span>
              </template>
              <template v-else>
                {{ item.name }}
              </template>
            </component>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ANavbar',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({ active: false })
}
</script>

<docs>
```vue
new Vue({
  template: `<a-navbar
                @click="log"
                @logo="log"
                :items="[
                  { name: 'Home', active: true },
                  { name: 'Examples' },
                  { name: 'Documentation' },
                  { name: 'Download', button: { state: 'primary', link: true, }, icon: 'github-circle' }
                ]"
              />`,
  methods: {
    log: function (payload) {
      console.log('received', payload)
    }
  }
})
```
### Playground

```jsx
<div class="columns is-multiline">
  <div class="column is-full has-background-black">
    <a-navbar
      dark
      :items="[
        { name: 'Home', active: true },
        { name: 'Examples' },
        { name: 'Documentation' },
        { name: 'Download', button: { state: 'primary', link: true, }, icon: 'github-circle' }
      ]"
    />
  </div>
  <div class="column is-full bg--white">
    <a-navbar />
  </div>
</div>
```
</docs>
