export default function map(val, min, max, newMin, newMax) {
  return (val - min) / (max - min) * (newMax - newMin) + newMin;
}
