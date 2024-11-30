import * as React from "react"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    onValueChange?: (value: number) => void;
  }
>(({ className, onChange, onValueChange, ...props }, ref) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    onChange?.(event)
    onValueChange?.(value)
  }

  return (
    <div className="relative flex w-full touch-none select-none items-center">
      <input
        type="range"
        ref={ref}
        onChange={handleChange}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary",
          "range-thumb:block range-thumb:h-5 range-thumb:w-5 range-thumb:rounded-full",
          "range-thumb:border-2 range-thumb:border-primary range-thumb:bg-background",
          "range-thumb:transition-colors range-thumb:focus-visible:outline-none",
          "range-thumb:focus-visible:ring-2 range-thumb:focus-visible:ring-ring",
          "range-thumb:focus-visible:ring-offset-2 range-thumb:disabled:pointer-events-none",
          "range-track:relative range-track:h-2 range-track:w-full range-track:rounded-full",
          "range-track:bg-secondary range-track:[&::-webkit-slider-runnable-track]:bg-secondary",
          className
        )}
        {...props}
      />
    </div>
  )
})
Slider.displayName = "Slider"

export { Slider }
