export function randomNineDigits() {
  return Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");
}
