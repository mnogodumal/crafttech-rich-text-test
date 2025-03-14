import { CANVAS_MODE_KEYS, type CanvasModes } from '../../types'
import { isAddingMode, isEditingMode } from '../../utils/is-mode'
import styles from './Control.module.scss'
import ControlItem from './controlItem/ControlItem'

export interface ControlProps {
  mode: CanvasModes
  setMode: (e: CanvasModes) => void
}

const CONTROL_ITEMS = [
  {
    itemMode: CANVAS_MODE_KEYS.EDITING,
    label: 'Взаимодействие',
    isActiveComparator: (mode: CanvasModes) => isEditingMode(mode)
  },
  {
    itemMode: CANVAS_MODE_KEYS.ADDING,
    label: 'Добавление',
    isActiveComparator: (mode: CanvasModes) => isAddingMode(mode)
  }
]

export default function Control({ mode, setMode }: ControlProps) {
  return (
    <div className={styles.root}>
      {CONTROL_ITEMS.map(control => (
        <ControlItem
          key={control.itemMode}
          htmlFor={control.itemMode}
          value={control.itemMode}
          checked={control.isActiveComparator(mode)}
          label={control.label}
          onChange={() => setMode(control.itemMode)}
        />
      ))}
    </div>
  )
}
