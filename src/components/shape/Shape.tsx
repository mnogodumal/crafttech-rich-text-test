import html2canvas from 'html2canvas'
import Konva from 'konva'
import { useEffect, useRef, useState } from 'react'
import { Group, Rect } from 'react-konva'
import { Html } from 'react-konva-utils'

import type { CanvasModes, CanvasObjectPosition } from '../../types'
import { isEditingMode } from '../../utils/is-mode'
import HtmlText from '../htmlText/HtmlText'
import ShapeEditor from './shape-editor/ShapeEditor'

export interface ShapeProps extends CanvasObjectPosition {
  mode: CanvasModes
}

const Shape = ({ x, y, width, height, mode }: ShapeProps) => {
  const [isEditorOpened, setIsEditorOpened] = useState(false)
  const [editorValue, setEditorValue] = useState('')

  const [contentHtml, setContentHtml] = useState('')

  const groupRef = useRef<Konva.Group>(null)
  const imageRef = useRef<Konva.Image | null>(null)
  const htmlRef = useRef<HTMLDivElement>(null)

  const renderImage = async () => {
    if (!htmlRef.current) {
      return
    }

    const padding = 10
    const canvas = await html2canvas(htmlRef.current, {
      backgroundColor: 'rgba(0,0,0,0)',
      width: width - padding,
      height: height - padding
    })

    const shape = new Konva.Image({
      x: padding / 2,
      y: padding / 2,
      scaleX: 1 / window.devicePixelRatio,
      scaleY: 1 / window.devicePixelRatio,
      image: canvas
    })

    groupRef.current?.add(shape)
    imageRef.current = shape
  }

  const handleGroupClick = () => {
    if (!isEditingMode(mode)) {
      return
    }

    if (isEditorOpened) {
      renderImage()
    }

    setIsEditorOpened(prev => !prev)
  }

  const handleEditorValueChange = (e: string) => {
    setEditorValue(e)

    setContentHtml(e)
  }

  useEffect(() => {
    if (!imageRef.current) {
      return
    }

    switch (isEditorOpened) {
      case true:
        imageRef.current.show()
        return
      case false:
        imageRef.current.hide()
        return
    }
  }, [isEditorOpened])

  return (
    <>
      <Group ref={groupRef} x={x} y={y} onClick={handleGroupClick} draggable>
        <Rect stroke={'white'} width={width} height={height} />

        {isEditorOpened && (
          <Html>
            <ShapeEditor
              initialValue={editorValue}
              onChange={handleEditorValueChange}
              onClose={handleGroupClick}
            />
          </Html>
        )}

        <Html>
          <HtmlText ref={htmlRef} html={contentHtml} />
        </Html>
      </Group>
    </>
  )
}

export default Shape
