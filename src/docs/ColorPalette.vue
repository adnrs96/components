<template>
  <div>
    <div
      v-for="(c, name) of colors"
      :key="`color-${name}`"
      class="mb-4"
    >
      <div class="text-gray-70 capitalize border-b border-solid border-gray-20 mb-3">
        {{ name }}
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="(s, shade) in c"
          :key="`shade-${name}-${shade}`"
          class="flex items-center w-1/5 mb-3"
        >
          <div
            :class="[
              'w-10 h-10 rounded-sm mr-4',
              `bg-${name}-${shade}`
            ]"
          />
          <div>
            <div>{{ name }}-{{ shade }}</div>
            <div>{{ s }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const colors = require('@/utils/colors')

@Component({
  name: 'Color Palette'
})
export default class ColorPalette extends Vue {
  private colors = colors
}
</script>

<docs>
```jsx noeditor
  <color-palette />
```
</docs>
