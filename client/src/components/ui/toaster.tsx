import * as React from "react"
import { Toast, ToastTitle, ToastDescription, ToastViewport } from "./toast"
import { useToast } from "../../hooks/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastViewport>
      {toasts.map((toast) => (
        <Toast 
          key={toast.id} 
          variant={toast.variant}
          onClose={() => dismiss(toast.id)}
        >
          <div className="grid gap-1">
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </div>
        </Toast>
      ))}
    </ToastViewport>
  )
}
