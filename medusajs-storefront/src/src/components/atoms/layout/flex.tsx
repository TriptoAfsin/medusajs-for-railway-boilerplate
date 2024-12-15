import React from "react"
import { cn } from "src/lib/utils"

type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse"
type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "normal"
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch"

const flexDirectionClassName: { [key in FlexDirection]: string } = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
}
const justifyContentClassName: { [key in JustifyContent]: string } = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  normal: "justify-normal",
}
const alignItemsClassName: { [key in AlignItems]: string } = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}
type FlexElementType = "span" | "div" | "section"
interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection
  justify?: JustifyContent
  align?: AlignItems
  children: React.ReactNode
  as?: FlexElementType
}

const components: Record<FlexElementType, React.ElementType> = {
  span: "span",
  div: "div",
  section: "section",
}

export function Flex(props: FlexProps) {
  const {
    as = "div",
    direction = "row",
    justify = "between",
    align = "center",
    children,
    className,
    ...rest
  } = props

  const Component = components[as] || "div"

  return (
    <Component
      className={cn(
        "flex w-full gap-4",
        flexDirectionClassName[direction],
        justifyContentClassName[justify],
        alignItemsClassName[align],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
