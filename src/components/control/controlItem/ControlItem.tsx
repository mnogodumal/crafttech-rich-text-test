import clsx from 'clsx'

import styles from './ControlItem.module.scss'

export interface ControlItemProps {
  htmlFor: string
  value: string
  checked: boolean
  label: string
  onChange: () => void
}

export default function ControlItem({
  htmlFor,
  value,
  checked,
  label,
  onChange
}: ControlItemProps) {
  return (
    <div className={clsx(styles.root, checked && styles.checked)}>
      <label htmlFor={htmlFor} className={styles.label}>
        <input
          id={htmlFor}
          type="radio"
          name="canvas-mode-control"
          className={styles.input}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.inputText}>{label}</span>
      </label>
    </div>
  )
}
