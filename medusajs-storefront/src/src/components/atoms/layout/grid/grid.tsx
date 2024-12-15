import React from "react"

import { cn } from "src/lib/utils"
import { columnClassNames, NumberOfGrids, rowClassNames } from "./styles"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: NumberOfGrids
  rows?: NumberOfGrids
  children: React.ReactNode
}

export function Grid(props: GridProps) {
  const { columns = "1", rows, children, className, ...rest } = props

  return (
    <div
      className={cn(
        "grid gap-7",
        columnClassNames[columns],
        rows && rowClassNames[rows],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
