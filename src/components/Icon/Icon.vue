<template>
  <div
    :class="[
      {'relative': $slots.default && $slots.defaults.length > 0 },
      cursor
    ]"
    @click="$emit('click', $event)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="[
        color,
        cursor,
        stroke,
        fill
      ]"
      :viewBox="viewBox"
      :height="height"
      :width="width"
    >
      <template v-if="path">
        <path
          v-for="(p, idx) of path"
          :key="`icon-${icon}-path-${idx}`"
          v-bind="p"
          :fill="storyLogoFill(p, idx)"
        />
      </template>

      <defs v-if="defs">
        <linearGradient
          v-if="defs.linearGradient"
          :id="defs.linearGradient.id"
          :x1="defs.linearGradient.x1"
          :y1="defs.linearGradient.y1"
          :x2="defs.linearGradient.x2"
          :y2="defs.linearGradient.y2"
          :gradientUnits="defs.linearGradient.gradientUnits"
        >
          <stop
            v-for="(stop, idx) of defs.linearGradient.stops"
            :key="`def-icon-gradient-stop-${idx}`"
            v-bind="stop"
          />
        </linearGradient>
      </defs>

      <template v-if="circle">
        <circle
          v-for="(c, idx) of circle"
          :key="`icon-${icon}-circle-${idx}`"
          v-bind="c"
        />
      </template>
    </svg>
    <div
      v-if="$slots.default"
      class="absolute inset-0 inline-flex items-center justify-center"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IIcon, IPath, ICircle, IDef } from '&/icon'
const Icons = require('./icons.json')

@Component({
  name: 'SIcon'
})
export default class SIcon extends Vue {
  @Prop({ type: String, required: true, validator: v => (Icons as any).map((i: IIcon) => i.name).includes(v) }) readonly icon!: string
  @Prop({ type: [String, Number], default: 16 }) readonly width!: string | number
  @Prop({ type: [String, Number], default: 16 }) readonly height!: string | number
  @Prop({ type: Boolean, default: false }) readonly clickable!: boolean
  @Prop({ type: String, default: undefined }) readonly color!: string | undefined

  private readonly icons: Array<IIcon> = [...(Icons as unknown as Array<IIcon>)]
  private readonly emptyIcon: IIcon = { name: '', width: 0, height: 0 }

  private get current (): IIcon {
    return this.icons.find((i: IIcon) => i.name === this.icon) || this.emptyIcon
  }

  private get cursor (): string {
    return this.clickable ? 'cursor-pointer' : 'cursor-default'
  }

  private get viewBox (): string {
    return `0 0 ${this.current.width} ${this.current.height}`
  }

  private get stroke (): string {
    return (this.current.path as IPath)?.stroke ? 'stroke-current' : (this.current.circle as ICircle)?.stroke ? 'stroke-current' : ''
  }

  private get fill (): string {
    return (this.current.path as IPath)?.fill ? 'fill-current' : (this.current.circle as ICircle)?.stroke ? 'fill-current' : ''
  }

  private storyLogoFill (p: IPath, idx: number): string | undefined {
    return this.icon === 'story' && !this.color ? ['#6E66FF', '#FE585A', '#96C8EB', '#FFB81E', '#FFB81E'][idx] : p.fill || undefined
  }

  private get path (): IPath[] | IPath | undefined {
    return this.current.path && !Array.isArray(this.current.path) ? [this.current.path] : this.current?.path
  }

  private get circle (): ICircle[] | ICircle | undefined {
    return this.current.circle && !Array.isArray(this.current.circle) ? [this.current.circle] : this.current?.circle
  }

  private get defs (): IDef[] | IDef | undefined {
    return this.current.defs || undefined
  }
}
</script>

<docs>
SIcon

```js
new Vue({
  template: `
    <div>
      <div class="flex items-center w-1/3 mb-2">
        <s-text p="5" weight="medium" class="text-gray-70 mr-2 w-2/5">storyscript</s-text>
        <s-icon icon="storyscript" width="123" height="24" />
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="(i, idx) of icons"
          :key="idx" class="flex items-center mr-2 mb-2 w-1/3"
          v-if="i.name !== 'storyscript'"
        >
          <s-text p="5" weight="medium" class="text-gray-70 mr-2 w-2/5">{{ i.name }}</s-text>
          <s-icon :icon="i.name" width="24" height="24" />
        </div>
      </div>
    </div>
  `,
  computed: {
    icons: function () {
      return this.$icons
    }
  }
})
```
</docs>
