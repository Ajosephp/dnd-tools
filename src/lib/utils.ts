import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/*
--- Randomize Function ---
Potential use cases:
Pass in a list of Races and return one of the options.
 */
export function randomize<T>(items : T[]): T {
  return items[(Math.floor(Math.random() * items.length))];
} 

/*
--- Dice Roll Function ---
 */
