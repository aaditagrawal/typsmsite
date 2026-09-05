import { clsx, type ClassValue } from "clsx"

/** Combine optional CSS class values without interpreting them as utilities. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
