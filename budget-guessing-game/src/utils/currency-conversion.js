import numeral from "numeral";

export function formatAsIntWithComma(number) {
  return numeral(number).format("0,0");
}

export function formatAsIntCurrency(number) {
  return numeral(number).format("$0,0");
}

export function formatAsCurrency(number) {
  return numeral(number).format("$0,0[.]00");
}

export function formatAsDecimalCurrency(number) {
  return numeral(number).format("$0,0.00");
}
