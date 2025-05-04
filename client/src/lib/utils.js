import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// remover unwanted characters from strings
export function rc(s) {
  var t = s;
  const uw = [",", "."]; // Unwanted characters
  uw.forEach((s) => t = t.replace(s, ""));
  return t.split(" ");
};
