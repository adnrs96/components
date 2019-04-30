<template>
  <nav
    class="breadcrumb has-pagination-separator"
    aria-label="breadcrumbs"
  >
    <ul>
      <li>
        <s-icon icon="home" />
      </li>
      <li
        v-for="(item, idx) of items"
        :key="`breadcrumbs-list-${_uid}-${idx}`"
        :class="{ 'is-active': (idx + 1) === items.length }"
      >
        <component
          :is="item.to ? 'router-link' : item.href ? 'a' : 'span'"
          :to="item.to"
          :href="item.href"
          :title="item.title"
        >
          {{ item.name }}
        </component>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SBreadcrumbs',
  props: {
    items: {
      type: Array,
      default: () => [{ name: 'Home', route: { name: 'home' } }]
    }
  }
}
</script>

<docs>
### Playground

```
<s-breadcrumbs :items="[{ name: 'hello', href: '/home' }, { name: 'salut' }]" />
```
</docs>

<style lang="scss">
.breadcrumb {
  &.has-pagination-separator {
    ul {
      align-items: center;
      li {
        span,
        a {
          padding: 0 0.75rem;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 600;
          color: #464769; // nth($grays, 2);
        }
        &.active,
        &:last-child {
          span,
          a {
            font-weight: 600;
          }
        }
        &:first-child {
          svg {
            padding: 0;
            height: 1rem;
          }
        }
        &:nth-child(2):before {
          display: none;
        }
        &:not(:first-child):not(:nth-child(2)):before {
          content: "";
          background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjOTc5Nzk3Ij48cG9seWxpbmUgcG9pbnRzPSI1IDEgMTAgNiA1IDExIiAvPjxwb2x5bGluZSBwb2ludHM9IjIgMSA3IDYgMiAxMSIgLz48L2c+PC9zdmc+");
          background-repeat: no-repeat;
          background-size: contain;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
}
</style>
