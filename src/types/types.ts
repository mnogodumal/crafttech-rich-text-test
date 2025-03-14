export type CanvasModeAddingShape = 'addShape'
export type CanvasModeEditingContent = 'editContent'

export type CanvasModes = CanvasModeAddingShape | CanvasModeEditingContent

export type CanvasObjectPosition = {
  id: string

  x: number
  y: number
  width: number
  height: number
}

export type CanvasFigure = CanvasObjectPosition & {
  html: string
}
