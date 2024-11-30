import * as React from "react"
import type { ReactNode } from "react"

export interface Toast {
  id: string
  title?: ReactNode
  description?: ReactNode
  duration?: number
  variant?: "default" | "destructive"
}

interface State {
  toasts: Toast[]
}

type Action =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "REMOVE_TOAST"; id: string }

const TOAST_LIMIT = 1
const DEFAULT_DURATION = 5000

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.id),
      }
    default:
      return state
  }
}

export function useToast() {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] })

  const toast = React.useCallback(
    ({ duration = DEFAULT_DURATION, ...props }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).slice(2, 9)

      dispatch({
        type: "ADD_TOAST",
        toast: { id, ...props },
      })

      if (duration > 0) {
        setTimeout(() => {
          dispatch({ type: "REMOVE_TOAST", id })
        }, duration)
      }

      return {
        id,
        dismiss: () => dispatch({ type: "REMOVE_TOAST", id }),
      }
    },
    []
  )

  return {
    toasts: state.toasts,
    toast,
    dismiss: (id: string) => dispatch({ type: "REMOVE_TOAST", id }),
  }
}