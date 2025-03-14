import { CanvasModes } from '../types'
import { CANVAS_MODE_KEYS } from '../types/enums'

export function isEditingMode(mode: CanvasModes) {
  return mode === CANVAS_MODE_KEYS.EDITING
}

export function isAddingMode(mode: CanvasModes) {
  return mode === CANVAS_MODE_KEYS.ADDING
}
