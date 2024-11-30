import * as React from "react"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, onCheckedChange, onChange, ...props }, ref) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    onCheckedChange?.(event.target.checked)
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        ref={ref}
        onChange={handleChange}
        {...props}
      />
      <div
        className={cn(
          "relative w-11 h-6 bg-input rounded-full peer",
          "peer-checked:bg-primary",
          "after:content-[''] after:absolute after:top-0.5 after:left-0.5",
          "after:bg-background after:rounded-full after:h-5 after:w-5",
          "after:transition-all peer-checked:after:translate-x-5",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        )}
      />
    </label>
  )
})
Switch.displayName = "Switch"

export { Switch }
