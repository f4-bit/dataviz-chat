import * as React from "react"

import { cn } from "@/lib/utils"

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: number
}

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(({ className, elevation = 1, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg bg-background",
        {
          "shadow-sm": elevation === 1,
          shadow: elevation === 2,
          "shadow-md": elevation === 3,
          "shadow-lg": elevation === 4,
          "shadow-xl": elevation === 5,
        },
        className,
      )}
      {...props}
    />
  )
})
Paper.displayName = "Paper"

export { Paper }

