import { forwardRef } from 'react'

import styles from './HtmlText.module.scss'

export interface HtmlTextProps {
  html: string
}

const HtmlText = forwardRef<HTMLDivElement, HtmlTextProps>(function HtmlText(
  { html },
  ref
) {
  return (
    <div
      ref={ref}
      className={styles.root}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
})

export default HtmlText
