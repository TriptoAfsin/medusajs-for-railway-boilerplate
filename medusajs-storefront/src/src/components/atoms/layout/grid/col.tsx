import React from "react"

import { cn } from "src/lib/utils"
import { NumberOfGrids, rowSpanClassNames, spanClassNames } from "./styles"

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: NumberOfGrids
  rowSpan?: NumberOfGrids
  children: React.ReactNode
}

export function Col(props: ColProps) {
  const { span = "1", rowSpan = "1", children, className, ...rest } = props

  return (
    <div
      className={cn(
        "grid",
        spanClassNames[span],
        rowSpanClassNames[rowSpan],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
