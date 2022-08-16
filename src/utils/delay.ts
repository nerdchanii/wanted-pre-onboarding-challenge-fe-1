/**
 * Delay Function
 *
 * @param {number} sec  - time to delay in seconds
 * @returns
 */

export function delay(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
