<template>
  <s-layout :background="dark ? 'dark' : undefined">
    <s-container>
      <s-div padding="normal">
        <s-level>
          <s-text
            slot="left"
            highlight
            letter-spacing="large"
            small
            color="gray-2"
          >
            PASSIONATELY BUILT WITH
            <s-icon icon="heart" />IN AMSTERDAM
          </s-text>
          <s-text
            slot="right"
            highlight
            small
            color="gray-2"
          >
            <span>
              &copy; 2019. Brought by ASYNCY, Inc.
            </span>
            <a
              :class="[`has-text-${dark ? 'dark-blue' : 'primary'}`]"
              href="//asyncy.click/slack"
              title="Storyscript Slack"
            >
              <i class="mdi mdi-slack" />
            </a>
            <a
              :class="[`has-text-${dark ? 'dark-blue' : 'primary'}`]"
              href="//twitter.com/storyscript_"
              title="Storyscript Twitter"
            >
              <i class="mdi mdi-twitter" />
            </a>
            <a
              :class="[`has-text-${dark ? 'dark-blue' : 'primary'}`]"
              href="//github.com/storyscript"
              title="Storyscript Github"
            >
              <i class="mdi mdi-github-circle" />
            </a>
          </s-text>
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
