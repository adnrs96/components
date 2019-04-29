<template>
  <section :class="['join-beta', 'is-stars', 'section', {'is-paddingless': isPaddingless }]">
    <div class="container is-widescreen">
      <p
        v-if="crew"
        class="is-size-6 has-text-white has-text-centered is-vcentered"
      >
        <s-icon
          icon="rocket"
          height="18px"
        />
        <a
          href="//angel.co/asyncy/jobs"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Join our crew"
        >
          Join our crew
        </a>
        <span> or learn about our </span>
        <a
          href="#"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Storyscript Champion Initiative"
        >
          Storyscript Champion Initiative
        </a>
        <span>.</span>
      </p>
      <s-container class="story">
        <s-div
          :size="bigger ? 'full' : 'half'"
          class="has-text-white"
        >
          <h4 :class="[`is-size-${bigger ? '2' : '4'}`, 'has-text-light', {'has-text-centered': bigger}, {'has-padding-bottom-medium': bigger}]">
            Time to write
            <b class="has-text-white">
              your story.
            </b>
          </h4>
        </s-div>
        <s-div :size="bigger ? 'full' : 'half'">
          <s-form-beta />
        </s-div>
      </s-container>
      <div
        v-if="footer"
        class="footer-container"
      >
        <div class="columns">
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Product
              </li>
              <li>
                <a
                  href="//docs.storyscript.io"
                  title="Documentation"
                  class="has-text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="//docs.storyscript.io/faq"
                  title="FAQ"
                  class="has-text-white"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="//asyncy.click/feedback"
                  title="Give Feedback"
                  class="has-text-white"
                >
                  Give Feedback
                </a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Resources
              </li>
              <li>
                <router-link
                  v-if="internal"
                  :to="{ name: 'events' }"
                  title="Events"
                  class="has-text-white"
                >
                  Events
                </router-link>
                <a
                  v-else
                  href="//storyscript.io/events"
                  title="Events"
                  class="has-text-white"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="//storyscript.io/blog"
                  title="Blog"
                  class="has-text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="//status.storyscript.io"
                  title="Status"
                  class="has-text-white"
                >
                  Status
                </a>
              </li>
              <!-- <li>
                <a
                  href="#"
                  title="Shop"
                  class="has-text-white"
                  @click.stop=""
                >Shop</a>
              </li> -->
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Company
              </li>
              <li>
                <router-link
                  v-if="internal"
                  :to="{ name: 'about' }"
                  title="About"
                  class="has-text-white"
                >
                  About
                </router-link>
                <a
                  v-else
                  href="//storyscript.io/about"
                  title="About"
                  class="has-text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="//angel.co/asyncy/jobs"
                  title="Jobs"
                  class="has-text-white"
                >
                  Jobs
                </a>
              </li>
              <li>
                <router-link
                  v-if="internal"
                  :to="{ name: 'contact' }"
                  title="Contact"
                  class="has-text-white"
                >
                  Contact
                </router-link>
                <a
                  v-else
                  href="//storyscript.io/contact"
                  title="Contact"
                  class="has-text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="//angel.co/asyncy/jobs"
                  title="We are hiring!"
                  class="has-text-info"
                >
                  We are hiring!
                </a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li>
                <s-logo
                  icon
                  class="fill--white"
                />
              </li>
              <li class="is-size-7 has-text-uppercase has-text-weight-bold has-text-white">
                2019 Asyncy Inc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    },
    bigger: {
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
  <s-join
    crew
    is-paddingless
    footer
  />
</section>
```
</docs>
