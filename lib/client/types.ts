export type Color = 'foreground' | 'foreground-alt' | 'background' | 'background-alt' | 'background-light' | 'accent' | 'none'
export type Size = 'sm' | 'md' | 'lg' | 'xl'

export type Spacing = {
  t?: number | Size,
  r?: number | Size,
  b?: number | Size,
  l?: number | Size,
  x?: number | Size,
  y?: number | Size
}