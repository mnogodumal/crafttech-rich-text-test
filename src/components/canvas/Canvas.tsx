import Konva from 'konva'
import { useRef, useState } from 'react'
import { Layer, Stage } from 'react-konva'

import type { CanvasModes, CanvasObjectPosition } from '../../types'
import { isEditingMode } from '../../utils/is-mode'
import Shape from '../shape/Shape'

export interface CanvasProps {
  mode: CanvasModes
}

export default function Canvas({ mode }: CanvasProps) {
  const [figures, setFigures] = useState<CanvasObjectPosition[]>([])
  const stageRef = useRef<Konva.Stage>(null)

  const isDraggable = isEditingMode(mode)

  const drawShape = () => {
    if (!stageRef.current) {
      console.error('drawShape: Stage Ref is not defined')
      return
    }

    const stage = stageRef.current!.getStage()

    const stageOffset = stage.absolutePosition() || { x: 0, y: 0 }
    const point = stage.getPointerPosition() || { x: 0, y: 0 }

    setFigures((prev: CanvasObjectPosition[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: 150,
        height: 150,
        x: point.x - stageOffset.x,
        y: point.y - stageOffset.y
      }
    ])
  }

  const handleOnClick = () => {
    if (isDraggable) return

    drawShape()
  }

  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={isDraggable}
      onClick={handleOnClick}
    >
      <Layer>
        {figures.map((figure: CanvasObjectPosition) => {
          return <Shape key={figure.id} {...figure} mode={mode} />
        })}
      </Layer>
    </Stage>
  )
}
