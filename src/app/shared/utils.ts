/**
 * Generates random number between the given range (end - inclusive) using math.random function.
 * @param start number
 * @param end number
 * @returns random number between start and end (inclusive).
 */

export function randint(start: number, end: number) {
  return Math.round(start + Math.random() * (end - start));
}
