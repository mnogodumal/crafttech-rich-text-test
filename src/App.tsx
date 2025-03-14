import './App.css'

import { useState } from 'react'

import Canvas from './components/canvas/Canvas'
import Control from './components/control/Control'
import { CanvasModes } from './types'
import { CANVAS_MODE_KEYS } from './types/enums'

const DEFAULT_CANVAS_MODE = CANVAS_MODE_KEYS.EDITING

function App() {
  const [canvasMode, setCanvasMode] = useState<CanvasModes>(DEFAULT_CANVAS_MODE)

  const handleCanvasModeChange = (e: CanvasModes) => {
    setCanvasMode(e)
  }

  return (
    <>
      <Canvas mode={canvasMode} />
      <Control mode={canvasMode} setMode={handleCanvasModeChange} />

      <div id="modal-root"></div>
    </>
  )
}

export default App
