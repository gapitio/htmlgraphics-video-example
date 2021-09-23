export function getTouchPosition(e: TouchEvent): { x: number; y: number } {
  const { clientX: x, clientY: y } = e.touches[0];
  return { x, y };
}
