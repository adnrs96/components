export interface IPath {
  d: string,
  stroke?: string,
  fill?: string,
  linearGradient?: any
  'stoke-linecap'?: string,
  'stroke-dasharray'?: string,
  'stroke-linejoin'?: string,
  'fill-rule'?: string,
  'clip-rule'?: string,
}

export interface IStop {
  'stop-color': string,
  'offset': string
}

export interface ILinearGradient {
  id: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  gradientUnits: string,
  stops?: Array<IStop>
}

export interface ICircle {
  cx: number,
  cy: number,
  r: number
  stroke?: string,
  fill?: string,
  linearGradient?: any
  'stoke-linecap'?: string,
  'stroke-dasharray'?: string,
  'stroke-linejoin'?: string,
  'fill-rule'?: string,
  'clip-rule'?: string,
}

export interface IDef {
  linearGradient?: ILinearGradient | Array<ILinearGradient>
}

export interface IIcon {
  name: string,
  width: number,
  height: number,
  path?: Array<IPath> | IPath,
  circle?: Array<ICircle> | ICircle,
  defs?: IDef | Array<IDef>
}
