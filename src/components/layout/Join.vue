<template>
  <s-layout class="join-beta">
    <s-container class="story">
      <s-div size="full">
        <s-text
          head="2"
          alignment="centered"
          :padding="['none', 'medium']"
        >
          Time to write your story.
        </s-text>
      </s-div>
      <s-div size="full">
        <s-form-beta />
      </s-div>
    </s-container>
    <s-container
      v-if="footer"
      class="footer-container"
    >
      <s-div
        v-for="(section, sid) of footerElements"
        :key="`footer-${_uid}-section-${sid}`"
        size="one-quarter"
      >
        <ul>
          <s-text
            v-if="section.name"
            color="gray-2"
            li
            highlight
            v-text="section.name"
          />
          <s-text
            v-for="(link, lid) of section.links"
            :key="`footer-${_uid}-section-${sid}-link-${lid}`"
            li
            p="2"
          >
            <component
              :is="internal && link.to ? 'router-link' : 'a'"
              :class="`has-text-${link.color || 'dark'}`"
              :href="link.href"
              :to="link.to"
              :title="link.title"
              v-text="link.title"
            />
          </s-text>
          <s-text
            v-for="(child, cid) of section.children"
            :key="`footer-${_uid}-section-${sid}-child-${cid}`"
            li
            p="2"
          >
            <component
              :is="child.el"
              v-bind="child.bind"
            >
              {{ child.text }}
            </component>
          </s-text>
        </ul>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'SJoin',
  props: {
    crew: {
      type: Boolean,
      default: false
    },
    internal: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    isPaddingless: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    footerElements: [{
      name: 'Product',
      links: [{
        title: 'Documentation',
        href: '//docs.storyscript.io'
      }, {
        title: 'FAQ',
        href: '//docs.storyscript.io/faq'
      }, {
        title: 'Give Feedback',
        href: '//asyncy.click/feedback'
      }]
    }, {
      name: 'Resources',
      links: [{
        title: 'Events',
        href: '//storyscript.io/events',
        to: { name: 'events' }
      }, {
        title: 'Blog',
        href: '//storyscript.io/blog'
      }, {
        title: 'Status',
        href: '//status.storyscript.io'
      }]
    }, {
      name: 'Company',
      links: [{
        title: 'About',
        href: '//storyscript.io/about',
        to: { name: 'about' }
      }, {
        title: 'Jobs',
        href: '//angel.co/storyscript/jobs'
      }, {
        title: 'Contact',
        href: '//storyscript.io/contact',
        to: { name: 'contact' }
      }, {
        title: 'We are hiring!',
        href: '//angel.co/storyscript/jobs',
        color: 'info'
      }]
    }, {
      children: [{
        el: 's-logo',
        bind: { icon: true }
      }, {
        el: 's-text',
        bind: { highlight: true, color: 'dark' },
        text: '2019. Asyncy Inc.'
      }]
    }]
  })
}
</script>

<docs>
### Playground

```jsx
<section>
  <s-join
    crew
    is-paddingless
    footer
  />
</section>
```
</docs>
