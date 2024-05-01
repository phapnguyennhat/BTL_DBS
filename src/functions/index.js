export function randomNineDigits() {
  return Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");
}

export function isValidAge(bdate) {
  if (bdate) {
    const birthDate = new Date(bdate);
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return birthDate <= eighteenYearsAgo;
  }
  return true;
}

export function randomIdCourse() {
  let numRandom = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(7, "0");
  return "KH" + numRandom;
}
