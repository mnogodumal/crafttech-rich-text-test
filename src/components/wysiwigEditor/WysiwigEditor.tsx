import 'react-quill/dist/quill.snow.css'

import ReactQuill from 'react-quill'

export interface WysiwigEditorProps {
  value: string
  setValue: (e: string) => void
}

export default function WysiwigEditor({ value, setValue }: WysiwigEditorProps) {
  return <ReactQuill theme="snow" value={value} onChange={setValue} />
}
