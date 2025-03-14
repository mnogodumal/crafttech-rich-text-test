import type {
  CanvasModeAddingShape,
  CanvasModeEditingContent,
  CanvasModes
} from './types'

export const CANVAS_MODE_ADDING: CanvasModeAddingShape = 'addShape'
export const CANVAS_MODE_EDITING: CanvasModeEditingContent = 'editContent'

export const CANVAS_MODE_KEYS: Record<'ADDING' | 'EDITING', CanvasModes> = {
  ADDING: CANVAS_MODE_ADDING,
  EDITING: CANVAS_MODE_EDITING
}
