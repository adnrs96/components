<template>
  <div class="a-card">
    <svg
      width="100%"
      height="30px"
      viewBox="0 20 1344 1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          v-once
          id="path-1"
          d="M9.10814064,29.6784475 C230.072091,9.89281585 451.036042,1.61854375e-14 671.999992,0 C892.963943,0 1113.92789,9.89281591 1334.89185,29.6784477 L1334.89185,29.6784493 C1340.04845,30.1401834 1343.99999,34.4613672 1343.99999,39.638598 L1344,780.839033 C1344,785.99878 1340.0743,790.311408 1334.93726,790.795017 C1113.95817,811.598339 892.979086,822 671.999996,822 C451.020906,822 230.041816,811.598339 9.06272513,790.795017 L9.06272501,790.795018 C3.92569319,790.31141 -4.40244724e-06,785.998783 -4.4024473e-06,780.839038 L-7.92050475e-07,39.6385943 C-7.92050476e-07,34.4613644 3.9515419,30.1401815 9.10814064,29.6784475 Z"
        />
      </defs>
      <use
        fill="#F2F3F9"
        xlink:href="#path-1"
      />
    </svg>
    <div class="a-card-container">
      <div :class="['a-card-background', { 'a-card-bg-alternative': alternative }]" />
      <div class="a-card-content">
        <slot />
      </div>
    </div>
    <svg
      width="100%"
      height="30px"
      viewBox="0 800 1344 1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <use
        fill="#F2F3F9"
        xlink:href="#path-1"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ACard',
  props: {
    alternative: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.a-card {
  position: relative;
  svg {
    vertical-align: top;
  }
  .a-card-container {
    padding: 2rem 4rem;
    position: relative;
    .a-card-content {
      position: relative;
    }
    .a-card-background {
      width: 100%;
      height: 100%;
      z-index: 0;
      position: absolute;
      background-color: #F2F3F9;
      left: 0;
      right: 0;
      display: block;
      top: 0;
      bottom: 0;
      background-repeat: no-repeat;
      background-position: 100% 0;
      &:not(.a-card-bg-alternative) {
        background-image: url('~@/assets/img/bg/box.svg');
        background-size: 350px 230px;
      }
      &.a-card-bg-alternative {
        background-image: url('~@/assets/img/bg/box-alternative.svg');
        background-size: 399px 185px;
      }
    }
  }
}
</style>

<docs>
### Playground

```jsx
<div>
  <a-card>
    <h1 class="is-size-1 title">Hello world</h1>
    <p class="is-size-4">lorem ipsum dolor sit amet</p>
  </a-card>
  <a-card alternative>
    <h1 class="is-size-1 title">Hello world</h1>
    <p class="is-size-4">lorem ipsum dolor sit amet</p>
  </a-card>
</div>
```
</docs>
