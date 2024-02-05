// Password Strength Indicator
const updatePasswordStrengthIndicator = () => {
  const hasUppercase = checkBoxValue.includes("Uppercase");
  const hasLowercase = checkBoxValue.includes("Lowercase");
  const hasNumbers = checkBoxValue.includes("Numbers");
  const hasSymbols = checkBoxValue.includes("Symbols");

  // Red color
  if (hasUppercase && !hasLowercase) {
    indicator_1.classList.add("red");
  } else {
    indicator_1.classList.remove("red");
  }

  // Orange color
  if (hasUppercase && hasLowercase) {
    indicator_1.classList.add("orange");
    indicator_2.classList.add("orange");
  } else {
    indicator_1.classList.remove("orange");
    indicator_2.classList.remove("orange");
  }

  // Yellow Color
  if (hasUppercase && hasLowercase && hasNumbers) {
    indicator_1.classList.add("yellow");
    indicator_2.classList.add("yellow");
    indicator_3.classList.add("yellow");
  } else {
    indicator_1.classList.remove("yellow");
    indicator_2.classList.remove("yellow");
    indicator_3.classList.remove("yellow");
  }

  // Green Color
  if (hasUppercase && hasLowercase && hasNumbers && hasSymbols) {
    indicator_1.classList.add("green");
    indicator_2.classList.add("green");
    indicator_3.classList.add("green");
    indicator_4.classList.add("green");
  } else {
    indicator_1.classList.remove("green");
    indicator_2.classList.remove("green");
    indicator_3.classList.remove("green");
    indicator_4.classList.remove("green");
  }
};
