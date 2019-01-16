<template>
  <div :class="['footer', {dark: dark}]">
    <div class="columns space-around">
      <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Product</h4>
        <!-- <router-link v-if="internal" to="/platform">Platform</router-link>
        <a
          v-else
          href="//asyncy.com/platform"
          title="Platform"
          target="_blank">
          Platform
        </a> -->
        <a
          href="//docs.asyncy.com"
          title="Documentation"
          target="_blank">
          Documentation
        </a>
        <a
          href="//docs.asyncy.com/faq"
          title="FAQ"
          target="_blank">
          FAQ
        </a>
        <a
          href="//asyncy.click/feedback"
          title="Give Feedback"
          target="_blank">
          Give Feedback
        </a>
      </div>
      <!-- <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Resources</h4>
        <router-link v-if="internal" to="/events">Events</router-link>
        <a
          v-else
          href="//asyncy.com/events"
          title="Events"
          target="_blank">
          Events
        </a>
        <a
          href="//medium.com/asyncy"
          title="Blog"
          target="_blank">
          Blog
        </a>
      </div> -->
      <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Company</h4>
        <router-link v-if="internal" to="/about">About</router-link>
        <a
          v-else
          href="//asyncy.com/about"
          title="About"
          target="_blank">
          About
        </a>
        <a
          href="//angel.co/asyncy/jobs"
          title="Jobs"
          target="_blank">
          Jobs
        </a>
        <router-link v-if="internal" to="/contact">Contact</router-link>
        <a
          v-else
          href="//asyncy.com/contact"
          title="Contact"
          target="_blank">
          Contact
        </a>
        <a
          href="//angel.co/asyncy/jobs"
          title="We are hiring !"
          class="text--green"
          target="_blank">
          We are Hiring!
        </a>
      </div>
      <div class="column">
        <div class="social">
          <a
            href="//asyncy.click/slack"
            title="Slack"
            target="_blank">
            <font-awesome-icon :icon="['fab', 'slack']" />
          </a>
          <a
            href="//github.com/asyncy"
            target="_blank"
            title="Github">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            href="//twitter.com/asyncy"
            title="Twitter"
            target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
        <p>&copy; 2018-2019 Asyncy, Inc.</p>
      </div>
    </div>
    <h4 :class="['signature', [dark ? 'text--light' : 'text--dark'], 'text--center']">
      Passionately built with <font-awesome-icon icon="heart" /> in Amsterdam
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    dark: {
      type: Boolean,
      default: false,
      description: 'put the dark mode'
    },
    internal: {
      type: Boolean,
      default: false,
      description: 'Internal router-link (for main landing purpose)'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  z-index: 3;
  display: block;
  position: relative;
  color: color(dark);

  .columns {
    max-width: 1000px;
    margin: 0 auto;
    .column {
      @include breakpoint (max s) { padding: .7rem 4rem }
      padding: .7rem;

      a {
        color: color(dark);
        display: block;
        white-space: nowrap;
        & + a {
          margin-top: 1rem;
        }
      }

      p {
        color: color(dark);
      }

      .social {
        display: flex;
        flex-direction: row;
        flex: .1 1 auto;
        justify-content: start;
        padding-top: 1rem;
        @include breakpoint(s) { justify-content: start }

        a {
          margin-top: 0;
          font-size: 2rem;

          & + a {
            margin-left: 2rem;
          }
        }
      }
    }
  }

  &.dark {
    color: color(light);
    .columns {
      .column {
        a {
          color: color(light);
        }

        p {
          color: color(light);
        }
      }
    }
  }

  .signature {
    padding: 2rem 0;
    svg {
      color: color(red);
    }
  }
}
</style>
