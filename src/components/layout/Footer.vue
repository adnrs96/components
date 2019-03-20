<template>
  <a-layout
    :class="[{'is-stars': dark}]"
    padding="normal"
  >
    <a-container>
      <a-div>
        <a-level>
          <p
            slot="left"
            class="is-footer-text is-size-8 has-text-uppercase has-text-weight-bold has-letter-spacing-large"
          >
            PASSIONATELY BUILT WITH
            <a-icon icon="heart" />IN AMSTERDAM
          </p>
          <p
            slot="right"
            class="is-footer-text is-size-8 has-text-uppercase has-text-right has-spans has-text-weight-bold"
          >
            <span class="has-letter-spacing-large">&copy; 2019 ASYNCY, Inc.</span>
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
        </a-level>
      </a-div>
    </a-container>
  </a-layout>
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
<section>
  <a-footer />
  <a-footer dark />
</section>
```
</docs>
