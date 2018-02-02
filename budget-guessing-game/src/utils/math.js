export function map(val, min, max, newMin, newMax) {
  return (val - min) / (max - min) * (newMax - newMin) + newMin;
}

export function clamp(val, min, max) {
  if (val < min) val = min;
  else if (val > max) val = max;
  return val;
}

export function snap(val, step, roundFunction = Math.round) {
  return roundFunction(val / step) * step;
}

export function snapWithinRange(val, step, min, max, roundFunction = Math.round) {
  const delta = clamp(val, min, max) - min;
  return min + snap(delta, step, roundFunction);
}
