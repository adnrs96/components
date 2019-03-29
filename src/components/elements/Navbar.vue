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
          v-click-outside="close"
          :class="['navbar-menu', { 'is-active': active }]"
        >
          <div class="navbar-end">
            <component
              :is="item.button ? 'span' : item.route ? 'router-link' : item.children ? 'div' : 'a'"
              v-for="(item, id) of items"
              :key="`navbar-${_uid}-item-${id}`"
              :href="!item.button && !item.route ? item.link : undefined"
              :to="item.route ? item.route : undefined"
              :title="item.name"
              :class="['navbar-item', { 'is-active': item.active || isDropped(id) }, { 'is-underlined': item.underlined }, { 'has-button': item.button }, { 'has-dropdown': item.children }, {'is-pure': item.avatar}, {'is-mobile-first': item.mobileFirst}]"
              @click.stop="close(item.children ? id : -1)"
            >
              <a-button
                v-if="item.button"
                v-bind="item.button"
                :icon="item.icon || undefined"
                @click="$emit('click', {$event, item})"
              >
                {{ item.name }}
              </a-button>
              <template v-else-if="item.children">
                <a :class="['navbar-link', {'is-arrowless': item.avatar}]">
                  <template v-if="typeof item.avatar === typeof ''">
                    <figure class="image is-avatar">
                      <img :src="item.avatar">
                      <span class="is-hidden-desktop">
                        {{ item.name }}
                      </span>
                    </figure>
                  </template>
                  <template v-else-if="item.avatar">
                    <div class="is-avatar icon is-hidden-touch">
                      <i
                        v-if="item.avatar.mdi"
                        :class="`mdi mdi-${item.avatar.mdi}`"
                      />
                      <a-icon
                        v-else
                        v-bind="item.avatar"
                      />
                    </div>
                    <span class="is-hidden-desktop">
                      {{ item.name }}
                    </span>
                  </template>
                  <span v-else>
                    <template v-if="item.icon">
                      <span class="icon">
                        <i :class="`mdi mdi-${item.icon}`" />
                      </span>
                      <span>{{ item.name }}</span>
                    </template>
                    <template v-else>
                      {{ item.name }}
                    </template>
                  </span>
                </a>
                <div :class="['navbar-dropdown', {'is-right': item.avatar}]">
                  <component
                    :is="child.divider ? 'hr' : 'a'"
                    v-for="(child, idx) of item.children"
                    :key="`navbar-${_uid}-item-${id}-children-${idx}`"
                    :class="[child.divider ? 'navbar-divider' : 'navbar-item', {'is-hidden-touch': child.hiddenTouch}, {'navbar-dropdown-spans': child.spans}]"
                    :title="child.name"
                    @click="$emit('click', { $event, children: true, parent: item, item: child })"
                  >
                    <template v-if="child.spans">
                      <span
                        v-for="(span, spanIdx) of child.spans"
                        :key="`navbar-${_uid}-item-${id}-children-${idx}-span-${spanIdx}`"
                      >
                        {{ span }}
                      </span>
                    </template>
                    <template v-else>
                      {{ child.divider ? '' : child.name }}
                    </template>
                  </component>
                </div>
              </template>
              <template v-else>
                <template v-if="item.icon">
                  <span class="icon">
                    <i :class="`mdi mdi-${item.icon}`" />
                  </span>
                  <span>{{ item.name }}</span>
                </template>
                <template v-else>
                  {{ item.name }}
                </template>
              </template>
            </component>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import ClickOutside from '@/directives/ClickOutside'

export default {
  name: 'ANavbar',
  directives: { ClickOutside },
  props: {
    /**
     * setup the dark theme
     */
    dark: {
      type: Boolean,
      default: false
    },
    /** the items array
     *
     * possible values of item: `{ name, link, route, icon, active, button, underlined }`
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({ active: false, dropped: [] }),
  computed: {
    isDropped: function () {
      return (id) => this.dropped.includes(id)
    }
  },
  methods: {
    close: function (id = undefined) {
      if (typeof id === typeof 0) {
        if (this.dropped.indexOf(id) !== -1) {
          this.dropped.splice(this.dropped.indexOf(id), 1)
        } else {
          this.dropped.push(id)
        }
      } else if (this.active) {
        this.active = false
      } else {
        this.dropped = []
      }
    }
  }
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
                  { name: 'Sign in', button: {}, icon: 'account-circle' },
                  { avatar: { icon: 'arrow-down' }, name: 'More', children: [{ name: 'submit a service' }] },
                  { name: 'Jean Barriere', avatar: 'https://avatars2.githubusercontent.com/u/11390722?v=4', children: [{ spans: ['Jean Barrière', 'jean@barriere.io'], hiddenTouch: true }, { divider: true }, { name: 'My account' }, { name: 'My services' }, { divider: true }, { name: 'Logout' }], mobileFirst: true }
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
<a-container>
  <a-div background="white" size="full">
    <a-navbar />
  </a-div>
  <a-div padding="max" size="full" class="has-background-black">
    <a-navbar
      dark
      :items="[
        { name: 'Home', active: true },
        { name: 'Examples', underlined: true },
        { avatar: { icon: 'arrow-down', style: 'stroke: #fff;width: 16px; height: 16px;' }, name: 'More', children: [{ name: 'submit a service' }] },
        { name: 'Jean Barriere', avatar: 'https://avatars2.githubusercontent.com/u/11390722?v=4', children: [{ spans: ['Jean Barrière', 'jean@barriere.io'], hiddenTouch: true }, { divider: true }, { name: 'My account' }, { name: 'My services' }, { divider: true }, { name: 'Logout' }], mobileFirst: true }
      ]"
    />
  </a-div>
</a-container>
```
</docs>
