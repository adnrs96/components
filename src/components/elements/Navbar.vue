<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a :class="['navbar-item', { 'fill--white': dark }]">
          <a-logo icon />
          <span class="is-separator" />
          <a-logo />
        </a>
        <a
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
      <div
        :id="`navbar-${_uid}`"
        :class="['navbar-menu', { 'is-active': active }]"
      >
        <div class="navbar-end">
          <a class="navbar-item is-active">
            Home
          </a>
          <a class="navbar-item">
            Examples
          </a>
          <a class="navbar-item">
            Documentation
          </a>
          <span class="navbar-item">
            <a class="button is-info is-inverted">
              <span class="icon">
                <i class="fab fa-github" />
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </div>
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
    }
  },
  data: () => ({ active: false })
}
</script>

<docs>
### Playground

```jsx
<a-navbar />
```
</docs>
