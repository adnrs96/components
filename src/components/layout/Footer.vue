<template>
  <s-layout :class="[{'is-stars': dark}]">
    <s-container>
      <s-div>
        <s-level>
          <p
            slot="left"
            class="is-footer-text is-size-8 has-text-uppercase has-text-weight-bold has-letter-spacing-large"
          >
            PASSIONATELY BUILT WITH
            <s-icon icon="heart" />IN AMSTERDAM
          </p>
          <p
            slot="right"
            class="is-footer-text is-size-8 has-text-uppercase has-text-right has-spans has-text-weight-bold"
          >
            <span class="has-letter-spacing-large">&copy; 2019 STORYSCRIPT, Inc.</span>
            <a
              :class="[`has-text-${dark ? 'white' : 'dark'}`]"
              href="//asyncy.click/slack"
              title="Storyscript Slack"
            >
              <i class="mdi mdi-slack" />
            </a>
            <a
              :class="[`has-text-${dark ? 'white' : 'dark'}`]"
              href="//twitter.com/storyscript"
              title="Storyscript Twitter"
            >
              <i class="mdi mdi-twitter" />
            </a>
            <a
              :class="[`has-text-${dark ? 'white' : 'dark'}`]"
              href="//github.com/storyscript"
              title="Storyscript Github"
            >
              <i class="mdi mdi-github-circle" />
            </a>
          </p>
        </s-level>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'SFooter',
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
  <s-footer />
  <s-footer dark />
</section>
```
</docs>
