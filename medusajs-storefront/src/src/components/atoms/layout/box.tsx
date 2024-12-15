import React, { forwardRef } from "react"
import { cn } from "src/lib/utils"

type BoxElementType = "span" | "div" | "section"

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: BoxElementType
  children?: React.ReactNode
}

const components: Record<BoxElementType, React.ElementType> = {
  span: "span",
  div: "div",
  section: "section",
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, as = "div", className, ...rest } = props

  const Component = components[as] || "div"

  return (
    <Component ref={ref} className={cn("block", className)} {...rest}>
      {children}
    </Component>
  )
})

Box.displayName = "Box"
