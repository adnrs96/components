<template>
  <section :class="['columns', 'is-desktop', { 'is-stars': dark }, 'footer']">
    <div class="column">
      <p class="is-size-8 has-text-uppercase has-text-centered">
        PASSIONATELY BUILT WITH <a-icon icon="heart" /> IN AMSTERDAM
      </p>
    </div>
    <div class="column">
      <p class="is-size-8 has-text-uppercase has-text-centered has-spans">
        <span>&copy; 2019 ASYNCY, Inc.</span>
        <a
          :class="[`has-text-${dark ? 'white' : 'dark'}`]"
          href="//asyncy.click/slack"
          title="Asyncy Slack"
        >
          <i class="mdi mdi-slack" />
        </a>
        <a
          :class="[`has-text-${dark ? 'white' : 'dark'}`]"
          href="//twitter.com/asyncy"
          title="Asyncy Twitter"
        >
          <i class="mdi mdi-twitter" />
        </a>
        <a
          :class="[`has-text-${dark ? 'white' : 'dark'}`]"
          href="//github.com/asyncy"
          title="Asyncy Github"
        >
          <i class="mdi mdi-github-circle" />
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AFooter',
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<docs>
### Playground

```jsx
<div class="columns is-multiline">
  <div class="column is-full">
    <a-footer />
  </div>
  <div class="column is-full">
    <a-footer dark />
  </div>
</div>
```
</docs>
