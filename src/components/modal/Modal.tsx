import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'

export interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children?: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const root = document.getElementById('modal-root')

  if (!isOpen || !root) return null

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>{children}</div>
        <button className={styles.closeButton} onClick={onClose}>
          &#10006;
        </button>
      </div>
    </div>,
    root
  )
}
