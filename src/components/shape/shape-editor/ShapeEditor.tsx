import { useEffect, useState } from 'react'

import Modal from '../../modal/Modal'
import WysiwigEditor from '../../wysiwigEditor/WysiwigEditor'

export interface ShapeEditorProps {
  initialValue?: string
  onChange?: (e: string) => void
  onClose?: () => void
}

export default function ShapeEditor({
  initialValue,
  onChange,
  onClose
}: ShapeEditorProps) {
  const [value, setValue] = useState(initialValue || '')

  useEffect(() => {
    onChange?.(value)
  }, [value, onChange])

  return (
    <Modal isOpen={true} onClose={onClose}>
      <WysiwigEditor value={value} setValue={setValue} />
    </Modal>
  )
}
